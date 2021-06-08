import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const FeaturesSecond = ({ featuredTwo }) => {
  moment.locale("fr");
  var localLocale = moment;
  return (
    <>
      {featuredTwo.map((feat) => (
        <Link to={`/article/${feat.id}`}>
          <div
            className="h-auto mr-2 hover:shadow-md cursor-pointer pb-2"
            key={feat.id}
          >
            <div>
              <img src={feat.image} alt="" className="rounded-lg" />
            </div>
            <div className="mt-2 mx-3">
              <h2 className="font-bold text-black-900">{feat.title}</h2>
              <p className="text-gray-400 text-sm mt-2">
                {localLocale(feat.createdAt).format("DD MMM YYYY")}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default FeaturesSecond;
