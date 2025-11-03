import React from "react";
import { OceanProfessionalTheme as theme } from "../theme";

// PUBLIC_INTERFACE
export function RecipeDetail({ recipe, isFavorite, onBack, onToggleFavorite }) {
  if (!recipe) return null;
  return (
    <section
      style={{
        background: theme.colors.surface,
        boxShadow: theme.shadow,
        borderRadius: theme.borderRadius,
        padding: "52px 66px",
        width: "92vw",
        margin: "30px auto",
        minHeight: "82vh",
        color: theme.colors.text,
        position: "relative",
        transition: theme.transition,
      }}
    >
      <button
        aria-label="Back"
        onClick={onBack}
        style={{
          position: "absolute",
          top: 36,
          left: 44,
          fontSize: 30,
          background: theme.colors.primary,
          color: "#fff",
          border: 0,
          borderRadius: 16,
          padding: "10px 24px",
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: theme.shadow,
          outline: "none",
          transition: theme.transition
        }}
      >
        ← Back
      </button>
      <div style={{ display: "flex", gap: 46, alignItems: "flex-start" }}>
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{
            width: 340,
            height: 220,
            borderRadius: theme.borderRadius,
            objectFit: "cover",
            boxShadow: theme.shadow,
            background: "#ccc"
          }}
        />
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: 48,
            fontWeight: 700,
            color: theme.colors.primary,
            marginBottom: 6
          }}>{recipe.title}</div>
          <div style={{
            fontSize: 22,
            color: "#888",
            marginBottom: 18
          }}>{recipe.meta}</div>
          <button
            onClick={() => onToggleFavorite(recipe.id)}
            style={{
              fontSize: 29,
              background: isFavorite
                ? theme.colors.secondary
                : "rgba(37,99,235,0.17)",
              color: isFavorite ? "#fff" : theme.colors.primary,
              border: 0,
              borderRadius: 20,
              padding: "12px 34px",
              fontWeight: 600,
              boxShadow: theme.shadow,
              outline: "none",
              marginBottom: 22,
              cursor: "pointer",
              transition: theme.transition
            }}
          >
            {isFavorite ? "★ Remove Favorite" : "☆ Add to Favorites"}
          </button>
          <div style={{ fontWeight: 700, fontSize: 28, margin: "16px 0 12px" }}>
            Ingredients
          </div>
          <ul style={{ fontSize: 22, marginBottom: 32 }}>
            {recipe.ingredients.map((item, i) =>
              <li key={i} style={{ lineHeight: "1.7" }}>- {item}</li>
            )}
          </ul>
          <div style={{ fontWeight: 700, fontSize: 28, margin: "16px 0 12px" }}>
            Steps
          </div>
          <ol style={{ fontSize: 22 }}>
            {recipe.steps.map((item, i) =>
              <li key={i} style={{ lineHeight: "1.7", marginBottom: 8 }}>
                {item}
              </li>
            )}
          </ol>
        </div>
      </div>
    </section>
  );
}
