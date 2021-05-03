import React from "react";
import Card from "../components/ArticleCard";
import Footer from "../components/Footer";

const Detail = () => {
  return (
    <>
      <div className="grid  sm:px-8 md:px-52 2xl:px-96 pt-6">
        <div>
          <p className="text-sm text-gray-400">
            Home {">"} Blog {">"}
            <span className="text-blue-600">
              Accept Payments Anywhere—Save On Sumup Air Card
            </span>
          </p>
          <div style={{ height: "500px" }} className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1587502538004-e9ec84b491c4?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Article image"
              className="rounded-xl mt-4"
              style={{ maxWidth: "1000px" }}
            />
          </div>
          <h1 className="text-black text-3xl mt-4 font-bold">
            Accept Payments Anywhere—Save On Sumup Air Card
          </h1>
          <p className="text-sm mt-4">
            Published : <span className="font-bold">22 April , 2021</span>
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
          <p className="mt-4">
            Long-time customer service professional Mat “Patto” Patterson
            answers readers’ most challenging customer support delivery,
            leadership, and career questions. If you have a question you’d love
            Patto to answer, send it to editorial@helpscout.com.
          </p>
          <p className="mt-4">
            Finding the right balance of excellent soft skills and just enough
            technical aptitude is a challenge, and I can tell you from personal
            experience that failing that challenge sucks for everyone involved.
            But the good news is that I learned from my failure, and so can you.
            First, you need to understand how much technical skill is enough for
            your team. What sort of questions will they need to answer? Do you
            expect every team member to reach the same level of technical skill,
            or could you have a tiered team with different levels of knowledge?
          </p>
          <p className="mt-4">
            Second, form an honest opinion about the resources you have on hand.
            What training materials do you already have, and how much time is
            realistically available to help people develop their skills? Those
            two points will help you understand where to set your bar of
            technical capability. Your next challenge is to find promising
            candidates and to discover through the process whether they will be
            able to clear that bar and succeed in your role. Your best
            candidates will be excited to stretch themselves, and they may even
            have some background with more technical work but be looking for a
            change. These people do exist — I myself was a web designer before
            moving into SaaS support, and I know there are plenty of others like
            me.
          </p>
        </div>
        <div className="mt-10 pb-10">
          <h1 className="text-3xl font-bold text-black mb-10">
            Suggested Blogs
          </h1>
          <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-10">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
