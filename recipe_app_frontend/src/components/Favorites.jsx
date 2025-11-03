import React from "react";
import { OceanProfessionalTheme as theme } from "../theme";
import { RecipeCard } from "./RecipeCard";

// PUBLIC_INTERFACE
export function Favorites({ allRecipes, favorites, onRecipeSelect, onToggleFavorite }) {
  const favRecipes = allRecipes.filter(r => favorites.includes(r.id));

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
        marginBottom: 18,
        fontSize: 44,
        fontWeight: 700
      }}>Favorites</h2>
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
        {favRecipes.map(recipe =>
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavorite={favorites.includes(recipe.id)}
            onClick={() => onRecipeSelect(recipe)}
            onFavorite={() => onToggleFavorite(recipe.id)}
          />
        )}
        {favRecipes.length === 0 && (
          <div style={{color: "#888", fontSize: 26, gridColumn: "1/-1"}}>
            No favorites yet.
          </div>
        )}
      </div>
    </section>
  );
}
