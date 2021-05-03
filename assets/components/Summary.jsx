import React from "react";
import LinkCard from "./LinkCard";

const Summary = () => {
  return (
    <div className="bg-gray-200 md:flex md:justify-center pt-16 pb-4 md:gap-x-44 2xl:gap-x-5">
      <div className="text-center">
        <img
          src="https://images.unsplash.com/photo-1556741533-411cf82e4e2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
          className="rounded-2xl h-96"
        />
        <h1 className="text-black-900 text-xl font-bold mt-3">
          Accept payments anywhere — save on SumUp
        </h1>
      </div>
      <div className="">
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
      </div>
    </div>
  );
};

export default Summary;
