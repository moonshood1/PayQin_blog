import React from "react";

const MainLoading = () => {
  return (
    <>
      {" "}
      <div className="text-center w-full sm:w-1/2">
        <div className=" rounded-2xl h-64 sm:h-96  bg-gray-300 flex justify-center flex-wrap content-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-36 w-36 text-gray-100 animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="h-7 bg-gray-300 rounded w-3/4 mt-3"></div>
      </div>
    </>
  );
};

export default MainLoading;
