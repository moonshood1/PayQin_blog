import React from "react";

const FeatureTwoLoader = ({ items }) => {
  const cards = items;
  return (
    <>
      {" "}
      {cards.map((card) => (
        <div className="h-72 mr-2 hover:shadow-md rounded-lg w-full overflow-hidden">
          <div className="bg-gray-300 flex justify-center flex-wrap content-center">
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
          <div className="mt-2 mx-3">
            <div class="h-5 bg-gray-300 rounded w-3/4"></div>
            <div class="h-3 bg-gray-300 rounded w-1/3 mt-2"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureTwoLoader;
