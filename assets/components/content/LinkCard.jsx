import React, { useState } from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <div key={article.id}>
          <Link to={`/article/${article.id}`}>
            <div className="h-auto w-80 hover:bg-white rounded-xl hover:shadow-lg cursor-pointer p-3">
              <h2 className="font-bold text-black-900 ">{article.title}</h2>
              <p className="text-gray-400 text-md">Cette semaine</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ArticleCard;
