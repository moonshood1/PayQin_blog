import React, { useState, useEffect } from "react";

const Features = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        var boom = data["hydra:member"];
        setArticles(boom);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="bg-white pt-16 pb-4 ">
      <h1 className="pl-4 md:pl-44 2xl:pl-72 text-3xl font-bold text-black mb-5">
        Featured Blogs
      </h1>
      <div className="grid md:grid-cols-2 ">
        <div className="px-2 md:pl-44 2xl:pl-72">
          <div className="bg-gray-100 h-44 grid grid-cols-2 rounded-lg overflow-hidden hover:shadow-md cursor-pointer">
            <div className="col-span-1 h-44">
              <img
                src="https://images.unsplash.com/photo-1536337005238-94b997371b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
                className="h-full"
              />
            </div>
            <div className="col-span-1 flex flex-wrap content-center mx-4">
              <h2 className="font-bold text-black-900">
                Want to go 100% digital? Say Hello to PayQin
              </h2>
              <p className="text-gray-400 text-sm mt-2">April 25, 2021</p>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="h-72 hover:shadow-md cursor-pointer">
              <div>
                <img
                  src="
                https://images.unsplash.com/photo-1610008885395-d4b47c2f5c8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                  className="rounded-lg"
                />
              </div>
              <div className="mt-2 ml-2">
                <h2 className="font-bold text-black-900">
                  How COVID-19 has impacted the European...
                </h2>
                <p className="text-gray-400 text-sm mt-2">April 22, 2021</p>
              </div>
            </div>
            <div className="h-72 ml-2 hover:shadow-md cursor-pointer">
              <div>
                <img
                  src="
                https://images.unsplash.com/photo-1610008885395-d4b47c2f5c8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                  className="rounded-lg"
                />
              </div>
              <div className="mt-2 ml-2">
                <h2 className="font-bold text-black-900">
                  Pay x Dropbox—put your creative energy to work
                </h2>
                <p className="text-gray-400 text-sm mt-2">April 22, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 px-2 sm:px-0 sm:mt-0 md:pl-2 2xl:pl-2">
          <div className="md:w-3/4 2xl:w-2/3 cursor-pointer hover:shadow-md pb-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1603539947678-cd3954ed515d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
                className="rounded-lg"
              />
            </div>
            <div className="mt-3 ml-4">
              <h2 className="font-bold text-black-900">
                Accept payments anywhere—save on SumUp
              </h2>
              <p className="text-gray-400 text-sm mt-2">April 22, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
