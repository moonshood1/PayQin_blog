import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/content/ArticleCard";
import Footer from "../components/wrappers/Footer";
import Overlay from "../components/wrappers/Overlay";
import moment from "moment";
import PreviousLoader from "../components/loaders/PreviousLoader";
import ArticleLoader from "../components/loaders/_ArticleLoader";
import { ARTICLES_API } from "../config";
import { GET_RANDOM_THREE } from "../config";

const Detail = ({ showOverlay, setShowOverlay }) => {
  moment.locale("fr");
  var locale = moment;
  const [article, setArticle] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [author, setAuthor] = useState("");
  const { id } = useParams();
  const handleClick = () => {
    setShowOverlay(false);
  };
  const url = ARTICLES_API + "/" + id;
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticle(data);
        setAuthor(data.author.firstName);
        setLoading(false);
      });
    fetch(GET_RANDOM_THREE)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      });
  }, [url]);
  return (
    <>
      <div
        className="grid px-2 sm:px-8 md:px-52 2xl:px-96 pt-6"
        onClick={handleClick}
      >
        {showOverlay && <Overlay />}
        {loading && <ArticleLoader />}
        {!loading && article && (
          <div>
            <div>
              <p className="text-sm text-gray-400">
                <Link to="/">Accueil</Link> {">"}
                <span className="text-blue-600">{article.title}</span>
              </p>
              <div style={{ height: "350px" }} className="overflow-hidden">
                <img
                  src={article.image}
                  alt="Article image"
                  className="rounded-xl mt-4 w-full sm:w-full"
                />
              </div>
              <h1 className="text-black text-xl sm:text-3xl mt-2 sm:mt-4 font-bold">
                {article.title}
              </h1>
              <p className="text-sm mt-4">
                Publié le :{" "}
                <span className="font-bold">
                  {locale(article.createdAt).format("DD MMM YYYY")}
                </span>
              </p>
              <div className="mt-5 flex">
                <div>
                  {(author.picture && (
                    <img
                      src={author.picture}
                      alt=""
                      className="rounded-full h-16 w-16"
                    />
                  )) || (
                    <img
                      src="https://res.cloudinary.com/dhc0siki5/image/upload/v1623066023/payqin/website/Profile_avatar_placeholder_large_fjauj8.png"
                      alt=""
                      className="rounded-full h-16 w-16"
                    />
                  )}
                </div>
                <div className="flex flex-wrap content-center">
                  <p className="text-sm ml-4">
                    Redigé par : <span className="font-bold"> {author}</span>
                  </p>
                </div>
              </div>
              {/* 
              <div className="flex justify-end pr-4">
                <span className="h-8 w-8 rounded-full bg-gray-200 text-sm mx-2 p-1 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </span>
                <span className="h-8 w-8 rounded-full bg-gray-200 text-sm mx-2 p-1 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </span>
                <span className="h-8 w-8 rounded-full bg-gray-200 text-sm mx-2 p-1 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </span>
              </div> */}
            </div>
            <div className="pb-10 border-gray-400 border-b-2">
              {article.introduction && (
                <div className="px-2 2xl:pr-4 mt-2 ">
                  <p className="mt-4 text-md sm:text-xl text-gray-700 font-bold">
                    {article.introduction}
                  </p>
                </div>
              )}
              <div className="px-2 2xl:pr-4 mt-2 ">
                <p className="mt-4">{article.content}</p>
              </div>
              {article.secondImage && (
                <div
                  style={{ height: "270px" }}
                  className="overflow-hidden px-2 2xl:pr-4 mt-2 "
                >
                  <img
                    src={article.secondImage}
                    alt="Article image"
                    className="rounded-xl mt-4 w-full sm:w-full"
                  />
                </div>
              )}
              {article.secondContent && (
                <div className="px-2 2xl:pr-4 mt-2 ">
                  <p className="mt-4">{article.secondContent}</p>
                </div>
              )}
              {article.thirdImage && (
                <div
                  style={{ height: "270px" }}
                  className="overflow-hidden px-2 2xl:pr-4 mt-2 "
                >
                  <img
                    src={article.thirdImage}
                    alt="Article image"
                    className="rounded-xl mt-4 w-full sm:w-full"
                  />
                </div>
              )}
              {article.conclusion && (
                <div className="px-2 2xl:pr-4 mt-5 ">
                  <p className="mt-4">{article.conclusion}</p>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="mt-10 pb-10">
          <h1 className="text-3xl font-bold text-black mb-10">Suggestions</h1>
          {isLoading && <PreviousLoader items={[1, 2, 3]} />}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-2 sm:gap-5">
            {!isLoading && articles && <Card articles={articles} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
