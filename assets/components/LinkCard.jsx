import React, { useState } from "react";

const ArticleCard = () => {
  return (
    <div className="h-24 w-80 hover:bg-white rounded-xl hover:shadow-lg cursor-pointer p-3">
      <h2 className="font-bold text-black-900 ">
        Accept payments anywhere—save on SumUp Air card
      </h2>
      <p className="text-gray-400 text-md">This week</p>
    </div>
  );
};

export default ArticleCard;
