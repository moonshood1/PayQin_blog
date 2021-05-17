import React, { useState, useEffect } from "react";
import Card from "../content/ArticleCard";

const Previous = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/get_previous_six")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="md:px-48 2xl:px-72 mt-16 mb-32">
      <h1 className="pl-4 sm:pl-0 text-3xl font-bold text-black mb-5">
        Previous Blog
      </h1>
      <div className="mt-3 grid grid-cols-2 mx-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-5">
        {isLoading && <span> Loading ...</span>}
        {articles && <Card articles={articles} />}
      </div>
    </div>
  );
};

export default Previous;