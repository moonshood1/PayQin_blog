import React from "react";

const Card = () => {
  return (
    <div className="mt-4 pb-2 w-96 bg-chiffon rounded overflow-hidden shadow-md sm:mt-0 sm:w-full relative hover:shadow-lg cursor-pointer">
      <div className="overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509482560494-4126f8225994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="card"
          width="100%"
        />
      </div>
      <div className="mt-3 ml-4">
        <h4 className="text-xl font-bold text-berry">
          5 Ways to automate your support without shutdown
        </h4>
        <p className="text-gray-500 text-sm">April 22, 2021</p>
      </div>
    </div>
  );
};

export default Card;
