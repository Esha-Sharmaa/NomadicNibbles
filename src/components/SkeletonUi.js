const SkeletonUI = () => {
  return (
    <div className="w-6/12 mx-auto overflow-hidden mt-10 h-[100vh]">
      <div className="flex gap-4 p-4">
        {/* Left side - Image */}
        <div className="bg-gray-300 h-48 w-64 animate-pulse rounded"> </div>
        {/* Right side - Title and Instructions Steps */}
        <div className="flex flex-col justify-center items-center w-[100%]">
          {/* Title */}
          <h1 className="bg-gray-300 h-12 w-[80%] animate-pulse mb-4"></h1>
          {/* Instructions Steps */}
          <div className="flex flex-col items-center gap-2 w-[100%]">
            <p className="bg-gray-300 h-12 w-[80%]  animate-pulse"></p>
            <p className="bg-gray-300 h-12 w-[80%]  animate-pulse"></p>
            <p className="bg-gray-300 h-12 w-[80%]  animate-pulse"></p>
            <p className="bg-gray-300 h-12 w-[80%]  animate-pulse"></p>
            <p className="bg-gray-300 h-12 w-[80%]  animate-pulse"></p>
            <p className="bg-gray-300 h-12 w-[80%]  animate-pulse"></p>
            <p className="bg-gray-300 h-12 w-[80%]  animate-pulse"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonUI;
