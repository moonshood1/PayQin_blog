import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const FeatureMain = ({ main }) => {
  moment.locale("fr");
  var localLocale = moment;
  return (
    <>
      {main.map((main) => (
        <Link to={`/article/${main.id}`}>
          <div
            className="mt-6 px-2 sm:px-0 sm:mt-0 md:pl-2 2xl:pl-2"
            key={main.id}
          >
            <div className="md:w-3/4 2xl:w-2/3 cursor-pointer hover:shadow-md pb-2">
              <div>
                <img src={main.image} alt="" className="rounded-lg" />
              </div>
              <div className="mt-3 ml-4">
                <h2 className="font-bold text-black-900">{main.title}</h2>
                <p className="text-gray-400 text-sm mt-2">
                  {localLocale(main.createdAt).format("DD MMM YYYY")}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default FeatureMain;
