import React from "react";
import moment from "moment";
import { Link, NavLink } from "react-router-dom";

const Card = ({ articles }) => {
  moment.locale("fr");
  var localLocale = moment;
  return (
    <>
      {articles.map((article) => (
        <div key={article.id}>
          <NavLink to={`/article/${article.id}`} replace>
            <div className="mt-4 pb-2 w-56 h-80 sm:h-96 rounded overflow-hidden shadow-md sm:mt-0 sm:w-full relative hover:shadow-lg cursor-pointer">
              <div className="overflow-hidden h-1/2 sm:h-2/3">
                <img
                  src={article.image}
                  alt="card"
                  width="100%"
                  className="h-full"
                />
              </div>
              <div className="mt-2 ml-2 sm:mt-5 sm:ml-4">
                <h4 className="text-md sm:text-xl font-bold">
                  {article.title}
                </h4>
                <p className="text-gray-500 text-sm sm:mt-2 mt-1">
                  {localLocale(article.createdAt).format("DD MMM YYYY")}
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </>
  );
};

export default Card;
