import React from "react";

const LinkCardMain = ({ main }) => {
  return (
    <>
      {main.map((article) => (
        <div
          className="h-24 w-80 bg-white rounded-xl shadow-lg cursor-pointer p-3"
          key={article.id}
        >
          <h2 className="font-bold text-black-900 ">{article.title}</h2>
          <p className="text-gray-400 text-md">This week</p>
        </div>
      ))}
    </>
  );
};

export default LinkCardMain;
