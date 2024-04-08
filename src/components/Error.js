import error from "../images/error.png"

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <img src={error} alt="error" className="w-[ 250px] h-[250px]" />

      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg text-gray-800 mb-4">
        It seems we've encountered an unexpected error.
      </p>
      <button
        onClick={() => window.location.reload()}
              className="bg-gray-800 text-white px-4 py-2 rounded font-roboto hover:bg-gray-600  "
      >
        Refresh Page
      </button>
      <p className="text-sm text-gray-600 mt-2">
        If the problem persists, please contact support.
      </p>
    </div>
  );
};

export default ErrorPage;
