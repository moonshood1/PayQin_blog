import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const Card = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <div key={article.id}>
          <Link to={`/article/${article.id}`}>
            <div className="mt-4 pb-2 w-64 sm:h-96 bg-chiffon rounded overflow-hidden shadow-md sm:mt-0 sm:w-full relative hover:shadow-lg cursor-pointer">
              <div className="overflow-hidden">
                <img src={article.image} alt="card" width="100%" />
              </div>
              <div className="mt-5 ml-4">
                <h4 className="text-xl font-bold text-berry">
                  {article.title}
                </h4>
                <p className="text-gray-500 text-sm mt-2">
                  {moment(article.createAt).format("MMMM DD, YYYY")}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Card;
