import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const RecipeDetail = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);
  const fetchRecipeDetails = async () => {
    try {
      const recipeDetailResponse = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=6432fb333e1244d59229c9e2c60d179d`
        );
        setRecipe(recipeDetailResponse.data);
        console.log(recipe);
      
    } catch (error) {
      console.log(error);
    }
    };
    useEffect(() => {
        fetchRecipeDetails();
    }, []);
  return <div>this is the recipe details page{recipeId}</div>;
};

export default RecipeDetail;
