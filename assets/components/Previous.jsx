import React from "react";
import Card from "./ArticleCard";

const Previous = () => {
  return (
    <div className="md:px-48 2xl:px-72 mt-16 mb-32">
      <h1 className="text-3xl font-bold text-black mb-5">Previous Blog</h1>
      <div className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Previous;
