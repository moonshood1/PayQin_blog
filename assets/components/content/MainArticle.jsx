import React from "react";
import { Link } from "react-router-dom";

const MainArticle = ({ main, articles }) => {
  return (
    <>
      <div className="hidden sm:block">
        {main.map((article) => (
          <div className="sm:block">
            <div className="text-center" key={article.id}>
              <div className="flex justify-center">
                <img
                  src={article.image}
                  alt=""
                  className="rounded-lg h-64 sm:h-96"
                />
              </div>
              <h1 className="text-black-900 text-xl font-bold mt-3">
                {article.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="sm:hidden">
        <h1 className="pl-4 sm:pl-0 text-2xl font-bold text-black mb-5">
          Article à la une
        </h1>
        {main.map((article) => (
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center col-span-2" key={article.id}>
              <div className="flex justify-center">
                <img src={article.image} alt="" className="rounded-lg h-48" />
              </div>
            </div>
            <div>
              <h1 className="text-gray-800 text-md font-bold mt-3 text-left">
                {article.title}
              </h1>
              <Link to={`/article/${article.id}`}>
                <p className="mt-8 mx-3 text-right flex text-sm text-gray-600">
                  Lire la suite{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mt-1 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainArticle;
