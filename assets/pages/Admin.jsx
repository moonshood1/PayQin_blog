import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ArticleTable from "../components/content/ArticleTable";
import CatTable from "../components/content/CategorieTable";

const Admin = () => {
  const [data, setData] = useState([]);
  const [cat, setCat] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/get_all_articles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
    fetch("http://127.0.0.1:8000/get_all_categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCat(data);
      });
  }, []);
  return (
    <div className="mt-3 px-4 mb-6">
      <div>
        <h1 className="sm:text-3xl font-bold uppercase">
          Gestion des articles du blog PayQin
        </h1>
      </div>
      <div className="mt-3">
        {" "}
        <p>
          Connecté en tant que <b>louis roger guirika</b>{" "}
        </p>{" "}
      </div>
      <div className="flex">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="mt-4 text-xl border-blue-400 bg-blue-300 b-2 shadow-lg h-10 w-48 flex items-center rounded-md cursor-pointer px-2"
        >
          <span className="text-white font-bold">Créer un article</span>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="ml-4 mt-4 text-xl border-red-400 bg-red-300 b-2 shadow-lg h-10 w-52 flex items-center rounded-md cursor-pointer px-2"
        >
          <span className="text-white font-bold">Créer une catégorie</span>
        </motion.div>
      </div>
      <div className="mt-4">
        <div className="w-full h-96 rounded border border-md shadow-lg">
          <table className="table-auto w-full text-xl mt-4 ml-4">
            <thead className="text-2xl select-none">
              <tr>
                <th className="text-left">Date de création</th>
                <th className="text-left">Titre de l'article</th>
                <th className="text-center">Auteur</th>
                <th className="text-center">Vues</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            {data && <ArticleTable data={data} />}
          </table>
        </div>
      </div>
      <div className="mt-3">
        <div className="w-full h-64 rounded border border-md shadow-lg">
          <table className="table-auto w-full text-xl mt-4 ml-4">
            <thead className="text-2xl select-none">
              <tr>
                <th className="text-left">Nom de la catégorie</th>
                <th className="text-center">Nombres d'articles</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            {cat && <CatTable data={cat} />}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
