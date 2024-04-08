import RecipeCard from './RecipeCard';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from 'react-router-dom';
const RecipeList = ({ id, title, recipes }) => {
    const slideLeft = () => {
      let slider = document.getElementById(id);
      slider.scrollLeft -= 500;
    };
    const slideRight = () => {
      let slider = document.getElementById(id);
      slider.scrollLeft += 500;
    };
  return (
    <div className="px-10 relative group">
      <h1 className="font-sans text-2xl font-semibold p-4">{title}</h1>
      <div
        className="flex gap-10 overflow-x-scroll whitespace-nowrap no-scrollbar scroll-smooth p-2 "
        id={id}
      >
        <MdChevronLeft
          className="bg-white rounded-full absolute left-[5%] top-[50%] cursor-pointer opacity-20  hover:opacity-100 group-hover:opacity-100 hidden group-hover:block"
          size={40}
          onClick={slideLeft}
        />
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="w-5/12 h-[200px] md:w-2/12  flex-shrink-0  rounded transition-transform duration-500 ease-in-out hover:bg-white hover:shadow-2xl shadow-amber-100"
          >
            <RecipeCard
              title={recipe.title}
              summary={recipe.summary}
              image={recipe.image}
            />
          </Link>
        ))}
        <MdChevronRight
          className="bg-white rounded-full absolute right-[7%] top-[50%] cursor-pointer opacity-20 hover:opacity-100 group-hover:opacity-100 hidden group-hover:block"
          size={40}
          onClick={slideRight}
        />
      </div>
    </div>
  );
};
export default RecipeList;
