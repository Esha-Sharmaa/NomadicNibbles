const SkeletonCards = () => {
    return (
      <div className="flex gap-10">
        <div className="w-5/12 h-[200px] md:w-2/12  flex-shrink-0 bg-gray-300 animate-pulse rounded"></div>
        <div className="w-5/12 h-[200px] md:w-2/12  flex-shrink-0 bg-gray-300 animate-pulse rounded"></div>
        <div className="w-5/12 h-[200px] md:w-2/12  flex-shrink-0 bg-gray-300 animate-pulse rounded"></div>
        <div className="w-5/12 h-[200px] md:w-2/12  flex-shrink-0 bg-gray-300 animate-pulse rounded"></div>
        <div className="w-5/12 h-[200px] md:w-2/12  flex-shrink-0 bg-gray-300 animate-pulse rounded"></div>
      </div>
    );
}

export default SkeletonCards;
