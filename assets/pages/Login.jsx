import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import authApi from "../services/authAPI";
import { toast } from "react-toastify";
import Overlay from "../components/wrappers/Overlay";

const Login = ({
  setIslogged,
  history,
  setUserName,
  showOverlay,
  setShowOverlay,
}) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

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
      toast.info("Vous êtes désormais connecté.e !");
      history.replace("/admin");
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const handleClick = () => {
    setShowOverlay(false);
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
      <div
        className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        onClick={handleClick}
      >
        {showOverlay && <Overlay />}
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Connectez vous
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Adresse Email
                </label>
                <input
                  id="username"
                  name="username"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Adresse Email"
                  value={credentials.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Mot de passe
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Mot de passe"
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
                Connexion
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
