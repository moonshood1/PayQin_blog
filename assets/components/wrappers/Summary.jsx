import React, { useEffect, useState } from "react";
import LinkCard from "../content/LinkCard";
import LinkCardMain from "../content/LinkCardMain";
import MainArticle from "../content/MainArticle";
import LinkCardLoading from "../loaders/_LinkCardLoading";
import LinkMainLoading from "../loaders/_LinkMainLoading";
import MainLoading from "../loaders/_MainLoading";

const Summary = () => {
  const [articles, setArticles] = useState([]);
  const [main, setMain] = useState([]);
  const [lastThreeLoading, setLastThreeLoading] = useState(true);
  const [lastOneLoading, setLastOneLoading] = useState(true);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/get_last_three")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticles(data);
        setLastThreeLoading(false);
      });
    fetch("http://127.0.0.1:8000/get_last_one")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMain(data);
        setLastOneLoading(false);
      });
  }, []);
  return (
    <>
      <div className="bg-gray-200 md:flex md:justify-center pt-16 pb-4 md:gap-x-44 2xl:gap-x-5">
        {lastOneLoading && <MainLoading />}
        {!lastOneLoading && main && <MainArticle main={main} />}
        <div className="hidden sm:grid">
          {lastOneLoading && <LinkMainLoading />}
          {!lastOneLoading && main && <LinkCardMain main={main} />}

          {lastThreeLoading && <LinkCardLoading items={[1, 2, 3]} />}
          {!lastThreeLoading && articles && <LinkCard articles={articles} />}
        </div>
      </div>
    </>
  );
};

export default Summary;
