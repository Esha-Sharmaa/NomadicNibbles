const RecipeCard = ({ title, summary, image }) => {
    const truncateString = (str) => {
        if (str.length < 20) return str;
        let truncated = '';
        for (let i = 0; i < 20; i++) truncated += str[i];
        return truncated +"...";
    }
    return (
      <div className="flex flex-col items-center p-4">
        <img src={image} alt="recipe" className="object-cover rounded" />
        <div>
          <h3 className="font-sans text-wrap font-bold"> {truncateString(title)} </h3>
        </div>
      </div>
    );
}

export default RecipeCard;