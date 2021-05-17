import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/content/ArticleCard";
import Footer from "../components/wrappers/Footer";
import Overlay from "../components/wrappers/Overlay";
import moment from "moment";

const Detail = ({ showOverlay, setShowOverlay }) => {
  const [article, setArticle] = useState([]);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const handleClick = () => {
    setShowOverlay(false);
  };
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticle(data);
        setIsLoading(false);
      });
    fetch("http://127.0.0.1:8000/get_random_three")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div
        className="grid px-2 sm:px-8 md:px-52 2xl:px-96 pt-6"
        onClick={handleClick}
      >
        {showOverlay && <Overlay />}
        {isLoading && <p>Loading ...</p>}
        {article && (
          <div>
            <div>
              <p className="text-sm text-gray-400">
                <a href="https://moonshood1.github.io/payqin_v2">Home</a> {">"}{" "}
                <Link to="/">Blog</Link> {">"}
                <span className="text-blue-600">{article.title}</span>
              </p>
              <div style={{ height: "500px" }} className="overflow-hidden">
                <img
                  src={article.image}
                  alt="Article image"
                  className="rounded-xl mt-4 w-full sm:w-full"
                />
              </div>
              <h1 className="text-black text-3xl mt-0 sm:mt-4 font-bold">
                {article.title}
              </h1>
              <p className="text-sm mt-4">
                Published :{" "}
                <span className="font-bold">
                  {moment(article.createdAt).format("MMMM DD, YYYY")}
                </span>
              </p>
              <div className="mt-5 flex">
                <div>
                  <img
                    src="https://randomuser.me/api/portraits/women/33.jpg"
                    alt=""
                    className="rounded-full h-16 w-16"
                  />
                </div>
                <div className="flex flex-wrap content-center">
                  <p className="text-sm ml-4">
                    Written by :{" "}
                    <span className="font-bold">Louis Roger Guirika</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end pr-14">
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
              </div>
            </div>
            <div className="pr-14 mt-5 pb-10 border-gray-400 border-b-2">
              <p className="mt-4">{article.content}</p>
            </div>
          </div>
        )}
        <div className="mt-10 pb-10">
          <h1 className="text-3xl font-bold text-black mb-10">
            Suggested Blogs
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-10">
            {articles && <Card articles={articles} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
