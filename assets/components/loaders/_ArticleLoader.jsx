import React from "react";

const ArticleLoader = () => {
  return (
    <>
      {" "}
      <div>
        <div>
          <div className="text-sm flex text-gray-400 animate-pulse">
            <div className="h-4 bg-gray-300 rounded w-8"></div>
            <div className="ml-2 h-4 bg-gray-300 rounded w-64"></div>
          </div>
          <div
            style={{ height: "350px" }}
            className="overflow-hidden bg-gray-300 w-full flex justify-center flex-wrap content-center mt-4 rounded-xl"
          >
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
          <div className="mt-2 h-8 bg-gray-300 rounded w-3/4 animate-pulse"></div>
          <div className="flex mt-4 animate-pulse">
            <div className="h-4 bg-gray-300 rounded w-16"></div>{" "}
            <div className="ml-3 h-4 bg-gray-300 rounded w-32"></div>
          </div>
          <div className="mt-5 flex animate-pulse">
            <div className="rounded-full h-16 w-16 bg-gray-300"></div>
            <div className="flex flex-wrap content-center ml-2">
              <div className="h-5 bg-gray-300 rounded w-16"></div>{" "}
              <div className="ml-4 h-5 bg-gray-300 rounded w-32"></div>
            </div>
          </div>
        </div>
        <div className="px-2 2xl:pr-4 mt-5 pb-10 border-gray-400 border-b-2 animate-pulse">
          <div className="my-1 h-5 bg-gray-300 rounded w-full"></div>
          <div className="my-1 h-5 bg-gray-300 rounded w-2/3"></div>
          <div className="my-1 h-5 bg-gray-300 rounded w-full"></div>
          <div className="my-1 h-5 bg-gray-300 rounded w-1/2"></div>
          <div className="my-1 h-5 bg-gray-300 rounded w-full"></div>
          <div className="my-1 h-5 bg-gray-300 rounded w-3/4"></div>
          <div className="my-1 h-5 bg-gray-300 rounded w-full"></div>
          <div className="my-1 h-5 bg-gray-300 rounded w-full"></div>
          <div className="my-1 h-5 bg-gray-300 rounded w-full"></div>
          <div className="my-1 h-5 bg-gray-300 rounded w-full"></div>
          <div className="my-1 h-5 bg-gray-300 rounded w-2/3"></div>
          <div className="my-1 h-5 bg-gray-300 rounded w-full"></div>
          <div className="my-1 h-5 bg-gray-300 rounded w-1/2"></div>
          <div className="my-1 h-5 bg-gray-300 rounded w-full"></div>
          <div className="my-1 h-5 bg-gray-300 rounded w-3/4"></div>
          <div className="my-1 h-5 bg-gray-300 rounded w-full"></div>
          <div className="my-1 h-5 bg-gray-300 rounded w-full"></div>
          <div className="my-1 h-5 bg-gray-300 rounded w-full"></div>
        </div>
      </div>
    </>
  );
};

export default ArticleLoader;
