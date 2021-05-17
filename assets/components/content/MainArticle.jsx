import React from "react";

const MainArticle = ({ main }) => {
  return (
    <>
      {main.map((article) => (
        <div className="text-center" key={article.id}>
          <div className="flex justify-center">
            <img src={article.image} alt="" className="rounded-2xl h-96" />
          </div>
          {/* Ajouter un carousel horizontal qui defile sur les différents articles */}
          <h1 className="text-black-900 text-xl font-bold mt-3">
            {article.title}
          </h1>
        </div>
      ))}
    </>
  );
};

export default MainArticle;
