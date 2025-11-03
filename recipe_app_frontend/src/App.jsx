import React, { useState, useEffect } from "react";
import { useTizenKeys } from "./hooks/useTizenKeys";
import "./App.css";
import { fetchRecipes } from "./data/recipes";
import { getFavorites, setFavorites, getCollections, setCollections } from "./utils/localStorage";
import { NavDrawer } from "./components/NavDrawer";
import { Home } from "./components/Home";
import { RecipeDetail } from "./components/RecipeDetail";
import { Favorites } from "./components/Favorites";
import { Collections } from "./components/Collections";
import { About } from "./components/About";
import { OceanProfessionalTheme as theme } from "./theme";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [screen, setScreen] = useState("home"); // home, favorites, collections, about, recipe
  const [allRecipes, setAllRecipes] = useState([]);
  const [favorites, setFavs] = useState([]);
  const [collections, setColls] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  // Initial load
  useEffect(() => {
    fetchRecipes().then(setAllRecipes);
    setFavs(getFavorites());
    setColls(getCollections());
  }, []);

  // Persist favorites on change
  useEffect(() => { setFavorites(favorites); }, [favorites]);
  // Persist collections on change
  useEffect(() => { setCollections(collections); }, [collections]);

  function navigate(s) {
    setScreen(s);
    setCurrentRecipe(null);
    setDrawerOpen(false);
  }

  function handleRecipeSelect(recipe) {
    setCurrentRecipe(recipe);
    setScreen("recipe");
    setDrawerOpen(false);
  }
  function handleBack() {
    setScreen("home");
    setCurrentRecipe(null);
    setDrawerOpen(true);
  }
  function onToggleFavorite(id) {
    setFavs(favs => favs.includes(id) ? favs.filter(rid => rid !== id) : [...favs, id]);
  }

  // Tizen keys handling
  useTizenKeys({
    onLeft: () => setDrawerOpen(true),
    onRight: () => setDrawerOpen(false),
    onEnter: () => {},
    onBack: () => {
      if (screen === "recipe") handleBack();
      else if (drawerOpen) setDrawerOpen(false);
    }
  });

  return (
    <div
      style={{
        width: "1920px",
        height: "1080px",
        minHeight: "100vh",
        minWidth: "100vw",
        background: `linear-gradient(129deg, ${theme.colors.gradientFrom} 0%, ${theme.colors.gradientTo} 100%)`,
        color: theme.colors.text,
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
      }}
      className="tv-app"
    >
      <NavDrawer
        selected={
          screen === "recipe"
            ? "home"
            : screen
        }
        onSelect={k => navigate(k)}
        open={drawerOpen}
      />
      <div style={{ flex: 1, marginLeft: drawerOpen ? 360 : 28, transition: theme.transition, overflow: "auto" }}>
        {screen === "home" && (
          <Home
            onRecipeSelect={handleRecipeSelect}
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
          />
        )}
        {screen === "favorites" && (
          <Favorites
            allRecipes={allRecipes}
            favorites={favorites}
            onRecipeSelect={handleRecipeSelect}
            onToggleFavorite={onToggleFavorite}
          />
        )}
        {screen === "collections" && (
          <Collections
            collections={collections}
            setCollections={setColls}
            allRecipes={allRecipes}
            favorites={favorites}
            onRecipeSelect={handleRecipeSelect}
          />
        )}
        {screen === "about" && (
          <About />
        )}
        {screen === "recipe" && (
          <RecipeDetail
            recipe={currentRecipe}
            isFavorite={currentRecipe ? favorites.includes(currentRecipe.id) : false}
            onBack={handleBack}
            onToggleFavorite={onToggleFavorite}
          />
        )}
      </div>
    </div>
  );
}

export default App;
