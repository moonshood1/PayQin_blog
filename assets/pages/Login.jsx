import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import authApi from "../services/authAPI";

const Login = ({ setIslogged, history, setUserName }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [isError, setIsError] = useState(false);

  //Gestion des champs
  const handleChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };

  // Gestion du submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await authApi.authenticate(credentials);
      setIslogged(true);
      setUserName(authApi.getUser());
      window.localStorage.setItem("username", authApi.getUser());
      history.replace("/admin");
    } catch (error) {
      setIsError(true);
      console.log(error.response);
    }
  };

  const handleClick = () => {
    setIsError(false);
  };

  const errorVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.1,
      },
    },
  };
  return (
    <>
      {isError && (
        <motion.div
          className="bg-red-800"
          variants={errorVariants}
          animate="visible"
          initial="hidden"
        >
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-red-800"></span>
                <p className="ml-3 font-medium text-white truncate">
                  <span className="md:hidden">Bad Credentials</span>
                  <span className="hidden md:inline">Bad Credentials</span>
                </p>
              </div>

              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  className="-mr-1 flex text-white font-bold p-2 rounded-md hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                  onClick={handleClick}
                >
                  <span className="sr-only">Dismiss</span>X
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Email address
                </label>
                <input
                  id="username"
                  name="username"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={credentials.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
