import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import { Link } from 'react-router-dom';
const RecipeList = () => {
    const [popularRecipes, setPopularRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const fetchRecipes = async () => {
        try {
            const popularRecipsRespone = await axios.get(
              "https://api.spoonacular.com/recipes/random?number=12&apiKey=6432fb333e1244d59229c9e2c60d179d"
            );
            setPopularRecipes(popularRecipsRespone.data.recipes);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
       }
    }
    useEffect(() => {
        fetchRecipes()
    }, []);
    return (
      !isLoading && (
        <div className="px-10">
          <h1 className="font-sans text-2xl font-semibold p-4">
            Popular Recipes
          </h1>
          <div className=" flex overflow-x-scroll whitespace-nowrap no-scrollbar scroll-smooth">
            {popularRecipes.map((recipe) => (
              <Link
                key={recipe.id}
                to={`/recipe/${recipe.id}`}
                className="w-2/12 flex-shrink-0"
              >
                <RecipeCard
                  title={recipe.title}
                  summary={recipe.summary}
                  image={recipe.image}
                />
              </Link>
            ))}
          </div>
        </div>
      )
    );
}
export default RecipeList;
