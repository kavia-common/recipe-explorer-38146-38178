const FAVORITES_KEY = "recipe_app_favorites";
const COLLECTIONS_KEY = "recipe_app_collections";

// PUBLIC_INTERFACE
export function getFavorites() {
  const favs = localStorage.getItem(FAVORITES_KEY);
  return favs ? JSON.parse(favs) : [];
}

// PUBLIC_INTERFACE
export function setFavorites(favorites) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

// PUBLIC_INTERFACE
export function getCollections() {
  const colls = localStorage.getItem(COLLECTIONS_KEY);
  return colls ? JSON.parse(colls) : [];
}

// PUBLIC_INTERFACE
export function setCollections(collections) {
  localStorage.setItem(COLLECTIONS_KEY, JSON.stringify(collections));
}
