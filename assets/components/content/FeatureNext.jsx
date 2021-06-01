import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const FeatureNext = ({ featuredOne }) => {
  moment.locale("fr");
  var localLocale = moment;
  return (
    <>
      {featuredOne.map((feat) => (
        <Link to={`/article/${feat.id}`}>
          <div
            className="bg-gray-100 h-44 grid grid-cols-2 rounded-lg overflow-hidden hover:shadow-md cursor-pointer"
            key={feat.id}
          >
            <div className="col-span-1 h-44">
              <img src={feat.image} alt="" className="h-full" />
            </div>
            <div className="col-span-1 flex flex-wrap content-center mx-2">
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

export default FeatureNext;
