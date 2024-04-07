import RecipeCard from './RecipeCard';
import { Link } from 'react-router-dom';
const RecipeList = ({ title, recipes }) => {
  return (
    <div className="px-10">
      <h1 className="font-sans text-2xl font-semibold p-4">{title}</h1>
      <div className="flex gap-10 overflow-x-scroll whitespace-nowrap no-scrollbar scroll-smooth p-2">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="w-5/12 h-[200px] md:w-2/12  flex-shrink-0 bg-[#F5F5DC] rounded transition-transform duration-500 ease-in-out hover:bg-white hover:shadow-lg shadow-amber-100"
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
  );
};
export default RecipeList;
