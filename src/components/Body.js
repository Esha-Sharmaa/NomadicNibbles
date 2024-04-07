import RecipeList from "./RecipeList";
import { useState, useEffect } from "react";
import axios from "axios";
const Body = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [vegRecipes, setVegRecipes] = useState([]);
  const [nonVegRecipes, setNonVegRecipes] = useState([]);
  const [indianRecipes, setIndianRecipes] = useState([]);
  const [latinRecipes, setLatinRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Check if recipes data is available in local storage
        const popularRecipesFromStorage =
          localStorage.getItem("popularRecipes");
        const vegRecipesFromStorage = localStorage.getItem("vegRecipes");
        const nonVegRecipesFromStorage = localStorage.getItem("nonVegRecipes");
        const indianRecipesFromStorage = localStorage.getItem("indianRecipes");
        const latinRecipesFromStorage = localStorage.getItem("latinRecipes");

        // If data is available, parse and set it to state
        if (popularRecipesFromStorage) {
          setPopularRecipes(JSON.parse(popularRecipesFromStorage));
        } else {
          const popularResponse = await axios.get(
            "https://api.spoonacular.com/recipes/random?number=10&apiKey=6432fb333e1244d59229c9e2c60d179d"
          );
          setPopularRecipes(popularResponse.data.recipes);
          localStorage.setItem(
            "popularRecipes",
            JSON.stringify(popularResponse.data.recipes)
          );
        }

        if (vegRecipesFromStorage) {
          setVegRecipes(JSON.parse(vegRecipesFromStorage));
        } else {
          const vegResponse = await axios.get(
            "https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian&apiKey=6432fb333e1244d59229c9e2c60d179d"
          );
          setVegRecipes(vegResponse.data.recipes);
          localStorage.setItem(
            "vegRecipes",
            JSON.stringify(vegResponse.data.recipes)
          );
        }
        if (nonVegRecipesFromStorage) {
          setNonVegRecipes(JSON.parse(nonVegRecipesFromStorage));
        } else {
          const nonVegResponse = await axios.get(
            "https://api.spoonacular.com/recipes/random?number=10&tags=non-vegetarian&apiKey=6432fb333e1244d59229c9e2c60d179d"
          );
          setNonVegRecipes(nonVegResponse.data.recipes);
          localStorage.setItem(
            "nonVegRecipes",
            JSON.stringify(nonVegResponse.data.recipes)
          );
        }
        if (indianRecipesFromStorage) {
          setIndianRecipes(JSON.parse(indianRecipesFromStorage));
        } else {
          const indianResponse = await axios.get(
            "https://api.spoonacular.com/recipes/random?number=10&cuisine=Indian&apiKey=6432fb333e1244d59229c9e2c60d179d"
          );
          setIndianRecipes(indianResponse.data.recipes);
          localStorage.setItem(
            "indianRecipes",
            JSON.stringify(indianResponse.data.recipes)
          );
        }
        if (latinRecipesFromStorage) {
          setLatinRecipes(JSON.parse(latinRecipesFromStorage));
        } else {
          const latinResponse = await axios.get(
            "https://api.spoonacular.com/recipes/random?number=10&cuisine=Latin%20American&apiKey=6432fb333e1244d59229c9e2c60d179d"
          );
          setLatinRecipes(latinResponse.data.recipes);
          localStorage.setItem(
            "latinRecipes",
            JSON.stringify(latinResponse.data.recipes)
          );
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="px-12 flex flex-col gap-10">
      {popularRecipes && (
        <RecipeList title={"Popular Recipes"} recipes={popularRecipes} />
      )}
      {vegRecipes && <RecipeList title={"Veg Recipes"} recipes={vegRecipes} />}
      {nonVegRecipes && (
        <RecipeList title={"Non-Veg Recipes"} recipes={nonVegRecipes} />
      )}
      {indianRecipes && (
        <RecipeList title={"Indian Recipes"} recipes={indianRecipes} />
      )}
      {latinRecipes && (
        <RecipeList title={"Latin Recipes"} recipes={latinRecipes} />
      )}
    </div>
  );
};

export default Body;
