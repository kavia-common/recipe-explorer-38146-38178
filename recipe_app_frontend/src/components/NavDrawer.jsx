import React from "react";
import { OceanProfessionalTheme as theme } from "../theme";

const links = [
  { key: "home", label: "Home", icon: "🏠" },
  { key: "favorites", label: "Favorites", icon: "⭐" },
  { key: "collections", label: "Collections", icon: "📚" },
  { key: "about", label: "About", icon: "⚙️" }
];

// PUBLIC_INTERFACE
export function NavDrawer({ selected, onSelect, open }) {
  return (
    <nav
      style={{
        width: open ? 360 : 0,
        background: `linear-gradient(135deg, ${theme.colors.gradientFrom}, ${theme.colors.gradientTo})`,
        boxShadow: theme.shadow,
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 20,
        overflow: "hidden",
        transition: theme.transition,
        borderTopRightRadius: theme.borderRadius,
        borderBottomRightRadius: theme.borderRadius,
        color: theme.colors.text,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "flex-start",
      }}
      aria-label="Navigation Drawer"
    >
      <div style={{padding: "32px 0 24px 32px", fontWeight: 700, fontSize: 36}}>
        <span style={{
          color: theme.colors.primary
        }}>Recipe App</span>
      </div>
      <ul style={{listStyle: "none", padding: 0}}>
        {links.map(link =>
          <li key={link.key}>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                width: "88%",
                border: 0,
                background: selected === link.key
                  ? theme.colors.primary
                  : "transparent",
                color: selected === link.key
                  ? "#fff"
                  : theme.colors.text,
                fontWeight: 500,
                fontSize: 28,
                borderRadius: theme.borderRadius,
                padding: "18px 24px",
                margin: "4px 0 8px 16px",
                boxShadow: selected === link.key ? theme.shadow : "none",
                cursor: "pointer",
                outline: selected === link.key ? `3px solid ${theme.colors.secondary}` : "none",
                transition: theme.transition,
                textAlign: "left"
              }}
              onClick={() => onSelect(link.key)}
              tabIndex={open ? 0 : -1}
            >
              <span style={{fontSize:34, marginRight:16}}>{link.icon}</span>
              <span>{link.label}</span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
