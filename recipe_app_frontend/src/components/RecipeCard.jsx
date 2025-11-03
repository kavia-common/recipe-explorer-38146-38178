import React from "react";
import { OceanProfessionalTheme as theme } from "../theme";

// PUBLIC_INTERFACE
export function RecipeCard({ recipe, onClick, isFavorite, onFavorite }) {
  return (
    <div
      tabIndex={0}
      style={{
        cursor: "pointer",
        position: "relative",
        minHeight: 330,
        minWidth: 350,
        maxWidth: 420,
        background: theme.colors.surface,
        borderRadius: theme.borderRadius,
        boxShadow: theme.shadow,
        margin: "0 auto",
        transition: theme.transition,
        overflow: "hidden",
        outline: "none",
      }}
      className="recipe-card"
      onClick={onClick}
      onKeyDown={e => {
        if (e.key === "Enter" || e.keyCode === 13) onClick?.();
      }}
    >
      <div style={{
        height: 185,
        width: "100%",
        background: "#0003",
        position: "relative",
        overflow: "hidden"
      }}>
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{
            width: "100%",
            height: 185,
            objectFit: "cover",
            borderTopLeftRadius: theme.borderRadius,
            borderTopRightRadius: theme.borderRadius,
            verticalAlign: "middle",
            display: "block",
          }}
        />
        <div style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 60,
          background: `linear-gradient(180deg, transparent, ${theme.colors.gradientFrom} 90%)`
        }} />
        <button
          aria-label={isFavorite ? "Remove favorite" : "Add to favorites"}
          style={{
            position: "absolute",
            top: 22,
            right: 24,
            background: "rgba(255,255,255,0.90)",
            color: isFavorite ? theme.colors.secondary : theme.colors.primary,
            border: "none",
            borderRadius: "50%",
            width: 48,
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: theme.shadow,
            fontSize: 29,
            cursor: "pointer",
            transition: theme.transition,
            outline: isFavorite ? `2px solid ${theme.colors.secondary}` : "none",
            zIndex: 2
          }}
          onClick={e => {
            e.stopPropagation();
            onFavorite();
          }}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>
      <div style={{
        padding: "20px 24px 18px 24px",
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{
          color: theme.colors.primary,
          fontSize: 28,
          fontWeight: 700,
          marginBottom: 6
        }}>{recipe.title}</div>
        <div style={{
          color: "#666",
          fontSize: 18,
          fontWeight: 400
        }}>{recipe.meta}</div>
      </div>
    </div>
  );
}
