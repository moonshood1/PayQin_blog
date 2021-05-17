import React, { useEffect, useState } from "react";
import LinkCard from "../content/LinkCard";
import LinkCardMain from "../content/LinkCardMain";
import MainArticle from "../content/MainArticle";

const Summary = () => {
  const [articles, setArticles] = useState([]);
  const [main, setMain] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/get_last_three")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      });
    fetch("http://127.0.0.1:8000/get_last_one")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMain(data);
        setIsloading(false);
      });
  }, []);
  return (
    <>
      <div className="bg-gray-200 md:flex md:justify-center pt-16 pb-4 md:gap-x-44 2xl:gap-x-5">
        {main && <MainArticle main={main} />}
        <div className="hidden sm:grid">
          {isLoading && <span> Loading ...</span>}
          {main && <LinkCardMain main={main} />}
          {articles && <LinkCard articles={articles} />}
        </div>
      </div>
    </>
  );
};

export default Summary;
