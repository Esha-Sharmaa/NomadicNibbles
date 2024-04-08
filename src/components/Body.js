import RecipeList from "./RecipeList";
import { useState, useEffect } from "react";
import axios from "axios";
import SkeletonCards from "./SkeletonCards";
import Error from "./Error";
const Body = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [vegRecipes, setVegRecipes] = useState([]);
  const [nonVegRecipes, setNonVegRecipes] = useState([]);
  const [indianRecipes, setIndianRecipes] = useState([]);
  const [latinRecipes, setLatinRecipes] = useState([]);
  const [error, setError] = useState(null);
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
            `https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.REACT_APP_API_KEY}`
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
            `https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian&apiKey=${process.env.REACT_APP_API_KEY}`
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
            `https://api.spoonacular.com/recipes/random?number=10&tags=non-vegetarian&apiKey=${process.env.REACT_APP_API_KEY}`
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
            `https://api.spoonacular.com/recipes/random?number=10&cuisine=Indian&apiKey=${process.env.REACT_APP_API_KEY}`
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
            `https://api.spoonacular.com/recipes/random?number=10&cuisine=Latin%20American&apiKey=${process.env.REACT_APP_API_KEY}`
          );
          setLatinRecipes(latinResponse.data.recipes);
          localStorage.setItem(
            "latinRecipes",
            JSON.stringify(latinResponse.data.recipes)
          );
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchRecipes();
  }, []);
  // Render the Error component if there's an error
  if (error) {
    return <Error error={error} />;
  }
  return (
    <div className="p-4 pb-8 md:p-12 flex flex-col gap-10 ">
      {popularRecipes ? (
        <RecipeList id={"popular"} title={"Popular Recipes"} recipes={popularRecipes} />
      ) : (
        <SkeletonCards />
      )}
      {vegRecipes ? (
        <RecipeList id={"veg"} title={"Veg Recipes"} recipes={vegRecipes} />
      ) : (
        <SkeletonCards />
      )}
      {nonVegRecipes ? (
        <RecipeList id={ "nonveg"} title={"Non-Veg Recipes"} recipes={nonVegRecipes} />
      ) : (
        <SkeletonCards />
      )}
      {indianRecipes ? (
        <RecipeList id={"indian"} title={"Indian Recipes"} recipes={indianRecipes} />
      ) : (
        <SkeletonCards />
      )}
      {latinRecipes ? (
        <RecipeList id={ "latin"} title={"Latin Recipes"} recipes={latinRecipes} />
      ) : (
        <SkeletonCards />
      )}
    </div>
  );
};

export default Body;
