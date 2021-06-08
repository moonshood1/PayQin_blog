import React from "react";
import { Link } from "react-router-dom";

const LinkCardMain = ({ main }) => {
  return (
    <>
      {main.map((article) => (
        <Link to={`/article/${article.id}`}>
          <div
            className="h-auto w-80 bg-white rounded-xl shadow-lg cursor-pointer p-3"
            key={article.id}
          >
            <h2 className="font-bold text-black-900 ">{article.title}</h2>
            <p className="text-gray-400 text-md">Cette semaine</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default LinkCardMain;
