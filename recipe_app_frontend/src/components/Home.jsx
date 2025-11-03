import React, { useState, useEffect, useRef } from "react";
import { fetchRecipes } from "../data/recipes";
import { OceanProfessionalTheme as theme } from "../theme";
import { RecipeCard } from "./RecipeCard";

// PUBLIC_INTERFACE
export function Home({ onRecipeSelect, favorites, onToggleFavorite }) {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const searchRef = useRef();

  useEffect(() => {
    fetchRecipes().then(setRecipes);
  }, []);

  const visibleRecipes = recipes.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.meta.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (searchRef.current) searchRef.current.focus();
  }, []);

  return (
    <section style={{
      marginLeft: 40,
      marginTop: 28,
      padding: "32px 0 0 24px",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      background: theme.colors.background,
      borderRadius: theme.borderRadius,
      boxShadow: theme.shadow,
      minHeight: 0,
      height: "93vh",
      width: "93vw",
      transition: theme.transition
    }}>
      <h2 style={{
        color: theme.colors.primary,
        marginBottom: 12,
        fontSize: 44,
        fontWeight: 700
      }}>All Recipes</h2>
      <input
        ref={searchRef}
        value={search}
        type="text"
        placeholder="Search recipes..."
        style={{
          background: "#fff",
          border: `2px solid ${theme.colors.primary}`,
          color: "#111827",
          fontSize: 30,
          borderRadius: 17,
          padding: "12px 26px",
          marginBottom: 26,
          outline: "none",
          boxShadow: theme.shadow,
          width: 440
        }}
        onChange={e => setSearch(e.target.value)}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
          gap: "38px",
          justifyItems: "center",
          alignItems: "start",
          flex: 1,
          overflowY: "auto",
          paddingBottom: 48,
          marginBottom: 24,
        }}>
        {visibleRecipes.map(recipe =>
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavorite={favorites.includes(recipe.id)}
            onClick={() => onRecipeSelect(recipe)}
            onFavorite={() => onToggleFavorite(recipe.id)}
          />
        )}
        {visibleRecipes.length === 0 && (
          <div style={{color: "#888", fontSize: 26, gridColumn: "1/-1"}}>
            No recipes found.
          </div>
        )}
      </div>
    </section>
  );
}
