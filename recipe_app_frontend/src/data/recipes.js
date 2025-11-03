export const mockRecipes = [
  {
    id: "1",
    title: "Blue Ocean Salmon",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    meta: "Seafood • 30 min • Easy",
    ingredients: [
      "2 salmon fillets",
      "1 tbsp olive oil",
      "1 lemon, sliced",
      "1 tsp sea salt",
      "1/4 tsp black pepper"
    ],
    steps: [
      "Preheat oven to 180°C.",
      "Drizzle olive oil over salmon, season with salt & pepper.",
      "Place lemon slices on top.",
      "Bake for 20 minutes until flaky.",
      "Serve with fresh greens."
    ],
  },
  {
    id: "2",
    title: "Spaghetti Primavera",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
    meta: "Pasta • 25 min • Veg",
    ingredients: [
      "200g spaghetti",
      "1 cup chopped veggies",
      "2 tbsp olive oil",
      "2 cloves garlic",
      "1/2 tsp chili flakes",
    ],
    steps: [
      "Cook spaghetti per instructions.",
      "Sauté garlic in olive oil, add vegetables.",
      "Mix spaghetti and veggies together.",
      "Season with chili flakes and salt.",
      "Serve topped with grated cheese."
    ],
  },
  {
    id: "3",
    title: "Amber Citrus Smoothie",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    meta: "Beverage • 5 min • Vegan",
    ingredients: [
      "1 cup orange juice",
      "1/2 cup mango chunks",
      "1 banana",
      "1 tsp ginger",
      "Ice cubes"
    ],
    steps: [
      "Add orange juice, mango, banana, and ginger to blender.",
      "Blend until smooth.",
      "Pour over ice and enjoy!"
    ]
  }
];

// Placeholder for future API integration
export async function fetchRecipes() {
  // In the future, replace with remote API fetch
  return mockRecipes;
}
