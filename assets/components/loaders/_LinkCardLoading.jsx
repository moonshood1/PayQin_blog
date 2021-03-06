import React from "react";

const LinkCardLoading = ({ items }) => {
  const cards = items;
  return (
    <>
      {cards.map((card) => (
        <div key={card}>
          <div className="h-24 w-80 rounded-xl hover:shadow-lg p-3">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/3 mt-2"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LinkCardLoading;
