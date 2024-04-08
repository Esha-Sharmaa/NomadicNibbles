const RecipeCard = ({ title, summary, image }) => {
    const truncateString = (str) => {
        if (str.length < 20) return str;
        let truncated = '';
        for (let i = 0; i < 20; i++) truncated += str[i];
        return truncated +"...";
    }
    return (
      <div className="flex flex-col items-center  ">
        <img
          src={image}
          alt="recipe"
          className="w-[100%] object-cover rounded"
        />
        <div>
          <h3 className="font-roboto text-wrap font-[500] p-2">
            {truncateString(title)}
          </h3>
        </div>
      </div>
    );
}

export default RecipeCard;
