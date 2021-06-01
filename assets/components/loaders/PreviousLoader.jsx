import React from "react";
import CardLoader from "./_CardLoader";

const PreviousLoader = ({ items }) => {
  const cards = items;
  return (
    <>
      {" "}
      <div className="mt-3 grid grid-cols-2 mx-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-5">
        {cards.map((card) => (
          <CardLoader />
        ))}
      </div>{" "}
    </>
  );
};

export default PreviousLoader;
