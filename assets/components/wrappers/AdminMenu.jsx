import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      {" "}
      <div className="grid h-full w-full md:w-auto pl-2 col-span-1 mt-3 border border-md shadow-md rounded mr-2">
        <div className="flex flex-col text-gray-700 text-sm 2xl:text-md">
          <h3 className="text-lg font-bold uppercase mt-4 mb-6">
            Gestion du contenu{" "}
          </h3>
          <hr />
          <Link to="/admin/article/new">
            <motion.p
              initial={{ x: 0 }}
              whileHover={{ x: 10 }}
              className="cursor-pointer mt-4 flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>{" "}
              Créer un article
            </motion.p>
          </Link>
          <Link to="/admin/category/new">
            <motion.p
              initial={{ x: 0 }}
              whileHover={{ x: 10 }}
              className="cursor-pointer mt-4 flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>{" "}
              Créer une catégorie
            </motion.p>
          </Link>
          <Link to="/admin">
            <motion.p
              initial={{ x: 0 }}
              whileHover={{ x: 10 }}
              className="cursor-pointer mt-4 flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
              Retour à l'administration
            </motion.p>
          </Link>
          {/* 
          <Link to="/admin/user/new">
            <motion.p
              initial={{ x: 0 }}
              whileHover={{ x: 10 }}
              className="cursor-pointer mt-4 flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>{" "}
              Ajouter un modérateur
            </motion.p>
          </Link>

          <motion.p
            initial={{ x: 0 }}
            whileHover={{ x: 10 }}
            className="cursor-pointer mt-4 flex "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>{" "}
            Liste des utilisateurs
          </motion.p>
          
          <motion.p
            initial={{ x: 0 }}
            whileHover={{ x: 10 }}
            className="cursor-pointer mt-4 flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>{" "}
            Toutes les catégories
          </motion.p>
          */}
        </div>
        {/*
        <div className="">
          <h4>Statistiques</h4>
          <hr />
          <div className="grid text-sm 2xl:text-md">
            <p className="flex mt-2">Articles : 75</p>
            <p className="flex">Vues : 78 400</p>
            <p className="flex">Modérateurs : 4</p>
            <p className="flex">Catégories : 3</p>
          </div>
        </div>
        */}
      </div>
    </>
  );
};

export default AdminMenu;
