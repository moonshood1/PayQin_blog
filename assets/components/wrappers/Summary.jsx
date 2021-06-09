import React, { useEffect, useState } from "react";
import LinkCard from "../content/LinkCard";
import LinkCardMain from "../content/LinkCardMain";
import MainArticle from "../content/MainArticle";
import LinkCardLoading from "../loaders/_LinkCardLoading";
import LinkMainLoading from "../loaders/_LinkMainLoading";
import MainLoading from "../loaders/_MainLoading";
import { GET_LAST_THREE, GET_LAST_ONE } from "../../config";

const Summary = () => {
  const [articles, setArticles] = useState([]);
  const [main, setMain] = useState([]);
  const [lastThreeLoading, setLastThreeLoading] = useState(true);
  const [lastOneLoading, setLastOneLoading] = useState(true);
  useEffect(() => {
    fetch(GET_LAST_THREE)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticles(data);
        setLastThreeLoading(false);
      });
    fetch(GET_LAST_ONE)
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
      <div className="bg-gray-200 md:flex md:justify-center px-8 pt-8 sm:pt-16 sm:px-0 pb-8 sm:pb-6 md:gap-x-44 2xl:gap-x-5">
        {lastOneLoading && <MainLoading />}
        {!lastOneLoading && main && (
          <MainArticle main={main} articles={articles} />
        )}
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
