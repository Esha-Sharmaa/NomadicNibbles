import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { RiCheckboxCircleLine } from "react-icons/ri";
import SkeletonUI from "./SkeletonUi";
import Error from "./Error";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const [showIngredients, setShowIngredients] = useState(true);
  const [error, setError] = useState(null);
  const [recipe, setRecipe] = useState(null);

  const toggleView = () => {
    setShowIngredients(!showIngredients);
  };

  const fetchRecipeDetails = async () => {
    try {
      const recipeDetailResponse = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/information`
      );
      setRecipe(recipeDetailResponse.data);
    } catch (e) {
      console.log("error is ", e);
      setError(e);
    }
  };
  useEffect(() => {
    fetchRecipeDetails();
  }, []);
  if(error) return <Error error={error} />;
  return !recipe ? (
    <SkeletonUI />
  ) : (
    <>
      <Link
        to="/"
        className="inline-block  text-black font-semibold text-sm  py-1 px-2 rounded border-b-2 border-b-black mt-2"
      >
        Back to Home
      </Link>
      <div className="block md:flex gap-10 justify-center my-12 min-h-[100vh] w-10/12 md:w-7/12 m-auto">
        <div className="w-6/12 md:4/12 mx-auto mb-4">
          <img
            src={recipe?.image}
            alt="recipe"
            className="w-[100%] rounded-lg"
          />
        </div>
        <div className="w-12/12 md:w-8/12">
          <h1 className="font-roboto text-2xl font-medium"> {recipe.title}</h1>
          <div className="flex gap-6 my-6">
            <button
              className="bg-gray-800 text-white p-2 rounded font-roboto hover:bg-gray-600 "
              onClick={() => toggleView()}
            >
              {showIngredients ? "Ingredients " : "Instructions"}
            </button>
          </div>
          {!showIngredients ? (
            <div>
              <h3 className="font-roboto text-xl font-semibold mb-2">
                Ingredients:
              </h3>
              <ul>
                {recipe?.extendedIngredients.map((ingredient, index) => (
                  <li key={index} className="font-roboto text-lg py-1">
                    <RiCheckboxCircleLine className="text-gray-400-500 mr-2 inline-block" />
                    {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <h3 className="font-roboto text-xl font-semibold mb-2">
                Instructions:
              </h3>
              <div
                className="font-roboto text-[17px] text-justify"
                dangerouslySetInnerHTML={{ __html: recipe?.instructions }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
