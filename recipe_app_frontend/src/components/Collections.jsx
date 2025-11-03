import React, { useState } from "react";
import { OceanProfessionalTheme as theme } from "../theme";

// Helper for new unique collection IDs
const uuid = () => "col_" + Math.random().toString(36).slice(2,10);

// PUBLIC_INTERFACE
export function Collections({
  collections,
  setCollections,
  allRecipes,
  favorites,
  onRecipeSelect
}) {
  const [editing, setEditing] = useState(null);
  const [newName, setNewName] = useState("");
  const [newColTitle, setNewColTitle] = useState("");

  function handleCreateCollection() {
    if (!newColTitle.trim()) return;
    setCollections([
      ...collections,
      { id: uuid(), name: newColTitle, recipes: [] }
    ]);
    setNewColTitle("");
  }

  function handleRename(id) {
    setCollections(
      collections.map(c =>
        c.id === id ? {...c, name: newName} : c
      )
    );
    setEditing(null);
    setNewName("");
  }

  function handleDelete(id) {
    setCollections(collections.filter(c => c.id !== id));
  }

  function handleToggleRecipe(colId, recipeId) {
    setCollections(
      collections.map(c =>
        c.id === colId
          ? {
              ...c,
              recipes: c.recipes.includes(recipeId)
                ? c.recipes.filter(rid => rid !== recipeId)
                : [...c.recipes, recipeId]
            }
          : c
      )
    );
  }

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
      overflowY: "auto"
    }}>
      <h2 style={{
        color: theme.colors.primary,
        marginBottom: 12,
        fontSize: 44,
        fontWeight: 700
      }}>Collections</h2>
      <div style={{marginBottom: 14}}>
        <input
          value={newColTitle}
          style={{
            fontSize: 26,
            padding: "10px 20px",
            border: `2px solid ${theme.colors.primary}`,
            borderRadius: 13,
            marginRight: 14
          }}
          placeholder="New collection name"
          onChange={e => setNewColTitle(e.target.value)}
        />
        <button
          style={{
            fontSize: 26,
            padding: "10px 34px",
            borderRadius: 13,
            background: theme.colors.secondary,
            color: "#fff",
            border: 0,
            cursor: "pointer",
            fontWeight: 500,
            boxShadow: theme.shadow
          }}
          onClick={handleCreateCollection}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {collections.map(col =>
          <li
            key={col.id}
            style={{
              marginBottom: 32,
              background: "#fff",
              borderRadius: theme.borderRadius,
              boxShadow: theme.shadow,
              padding: "18px 28px"
            }}
          >
            {editing === col.id ? (
              <>
                <input
                  value={newName}
                  style={{fontSize: 26, padding: "8px 14px",border:`2px solid ${theme.colors.primary}`,borderRadius:10, marginRight:10}}
                  onChange={e => setNewName(e.target.value)}
                  autoFocus
                />
                <button
                  style={{
                    fontSize: 22,
                    padding: "6px 20px",
                    background: theme.colors.primary,
                    color: "#fff",
                    border: 0,
                    borderRadius: 8,
                    fontWeight: 500,
                    marginRight: 10
                  }}
                  onClick={() => handleRename(col.id)}
                >Save</button>
                <button
                  style={{
                    fontSize: 22,
                    padding: "6px 18px",
                    background: theme.colors.error,
                    color: "#fff",
                    border: 0,
                    borderRadius: 8,
                  }}
                  onClick={() => setEditing(null)}
                >Cancel</button>
              </>
            ) : (
              <>
                <span style={{ fontSize: 32, fontWeight: 700, color: theme.colors.primary }}>
                  {col.name}
                </span>
                <button
                  style={{ marginLeft: 24, fontSize:20, background:"none", color: theme.colors.secondary, border:0, cursor: "pointer"}}
                  onClick={() => { setEditing(col.id); setNewName(col.name);}}
                >Rename</button>
                <button
                  style={{ marginLeft: 16, fontSize:20, background:"none", color: theme.colors.error, border:0, cursor:"pointer"}}
                  onClick={() => handleDelete(col.id)}
                >Delete</button>
              </>
            )}
            <div style={{marginTop:14}}>
              <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 3 }}>Recipes in this Collection:</div>
              <ul style={{display:"flex",flexWrap:"wrap",gap:10,padding:0}}>
                {col.recipes.map(rid => {
                  const recipe = allRecipes.find(r => r.id === rid);
                  if (!recipe) return null;
                  return (
                    <li key={rid}>
                      <button
                        style={{
                          fontSize: 20,
                          padding: "7px 13px",
                          borderRadius: 12,
                          background: "#D6E7FF",
                          color: theme.colors.primary,
                          border: 0,
                          marginRight: 5,
                          marginBottom: 7,
                          cursor: "pointer"
                        }}
                        onClick={() => onRecipeSelect(recipe)}
                      >{recipe.title}</button>
                      <button
                        style={{
                          fontSize: 20,
                          background: "none",
                          color: theme.colors.error,
                          border: 0,
                          marginLeft: 2,
                          cursor: "pointer"
                        }}
                        aria-label="Remove from collection"
                        onClick={() => handleToggleRecipe(col.id, recipe.id)}
                      >✖</button>
                    </li>
                  );
                })}
                <li>
                  <select
                    style={{
                      fontSize: 20,
                      padding: "7px 13px",
                      borderRadius: 11,
                      background: "#e4f5fd",
                      border: `1px solid ${theme.colors.primary}`,
                      color: theme.colors.primary,
                      outline: "none"
                    }}
                    value=""
                    onChange={e => {
                      const rid = e.target.value;
                      handleToggleRecipe(col.id, rid);
                    }}
                  >
                    <option value="">Add Recipe...</option>
                    {[...allRecipes.filter(r => !col.recipes.includes(r.id))].map(r => (
                      <option key={r.id} value={r.id}>{r.title}</option>
                    ))}
                  </select>
                </li>
              </ul>
            </div>
          </li>
        )}
        {collections.length === 0 && (
          <div style={{color: "#888", fontSize: 26}}>
            No collections. Create your first one!
          </div>
        )}
      </ul>
    </section>
  );
}
