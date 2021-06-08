import React from "react";

const ArticlePattern = () => {
  return (
    <>
      <div className="hidden sm:grid w-full md:w-auto  col-span-1  border border-md shadow-md rounded mr-2 mt-8 h-auto animate-pulse">
        <div className="flex flex-col text-gray-700 text-sm 2xl:text-md">
          <h3 className="text-lg font-bold uppercase mt-4 mb-6 ml-2">
            Design de l'article
          </h3>
          <hr />
          <div>
            <div className="px-2">
              <div
                style={{ height: "75px" }}
                className="overflow-hidden bg-gray-400 w-3/4 flex justify-center flex-wrap content-center mt-4 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-100 animate-pulse"
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
              <div className="h-4 bg-gray-400 rounded w-32 mt-2 text-white text-xs">
                {" "}
                Titre de l'article
              </div>
              <div className="my-1 h-5 bg-gray-400 rounded w-full text-white text-xs">
                Introduction
              </div>
              <div className="my-1 h-8 bg-gray-400 rounded w-full text-white text-xs">
                Contenu
              </div>
              <div
                style={{ height: "35px" }}
                className="overflow-hidden bg-gray-400 w-2/3 flex justify-center flex-wrap content-center rounded-lg mt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-100 animate-pulse"
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
              <div className="mt-3 h-6 bg-gray-400 rounded w-full text-white text-xs">
                Second contenu
              </div>
              <div
                style={{ height: "35px" }}
                className="overflow-hidden bg-gray-400 w-2/3 flex justify-center flex-wrap content-center rounded-lg mt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-100 animate-pulse"
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
              <div className="mt-2 h-4 bg-gray-400 rounded w-2/3 text-white text-xs">
                Conclusion
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlePattern;
