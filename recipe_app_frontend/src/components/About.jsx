import React from "react";
import { OceanProfessionalTheme as theme } from "../theme";

// PUBLIC_INTERFACE
export function About() {
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
      transition: theme.transition,
      color: theme.colors.text
    }}>
      <h2 style={{
        color: theme.colors.primary,
        marginBottom: 18,
        fontSize: 42,
        fontWeight: 700
      }}>About This App</h2>
      <div style={{fontSize:26, maxWidth:840,}}>
        <p>Recipe Explorer is a demonstration Tizen recipe browsing app. You can search, view, and favorite tasty recipes or organize them into your own collections.</p>
        <p>
        <b>Ocean Professional Theme:</b> <span style={{color: theme.colors.primary}}>Blue</span> & <span style={{color: theme.colors.secondary}}>Amber</span> accents, modern styling, and smooth transitions for a clean experience.
        </p>
        <hr style={{margin: "32px 0 18px 0", border: "none", borderTop: `2px solid ${theme.colors.primary}`}} />
        <div>App Version: <b>1.0.0</b></div>
        <div>Framework: React + Tizen Web</div>
        <div>© 2024 Recipe Explorer Demo App</div>
      </div>
    </section>
  );
}
