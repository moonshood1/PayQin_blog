import React, { useState, useEffect } from "react";
import Card from "../content/ArticleCard";
import PreviousLoader from "../loaders/PreviousLoader";
import { GET_PREVIOUS_SIX } from "../../config";

const Previous = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(GET_PREVIOUS_SIX)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="px-2 md:px-48 2xl:px-72 mt-16 mb-32">
      <h1 className="pl-4 sm:pl-0 sm:text-3xl text-2xl font-bold text-black mb-5">
        Articles précédents
      </h1>
      {isLoading && <PreviousLoader items={[1, 2, 3, 4, 5, 6]} />}
      <div className="mt-3 grid grid-cols-2 mx-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-5">
        {!isLoading && articles && <Card articles={articles} />}
      </div>
    </div>
  );
};

export default Previous;
