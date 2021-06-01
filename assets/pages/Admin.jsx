import React, { useState, useEffect } from "react";
import ArticleTable from "../components/content/ArticleTable";
import CatTable from "../components/content/CategorieTable";
import AdminMenu from "../components/wrappers/AdminMenu";
import authApi from "../services/authAPI";
import Pagination from "../components/content/Pagination";
import ArticleCreation from "../components/wrappers/ArticleCreation";
import { toast } from "react-toastify";

const Admin = ({ isLogged, setIslogged, history, userName, setUserName }) => {
  const [articleshow, setArticleshow] = useState(false);
  const [data, setData] = useState([]);
  const [cat, setCat] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/get_all_articles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserName(localStorage.getItem("username"));
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        toast.error("Erreur lors du chargement des articles");
      });
    fetch("http://127.0.0.1:8000/get_all_categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCat(data);
      })
      .catch((error) => {
        console.log(error.response);
        toast.error("Erreur lors du chargement des catégories");
      });
  }, []);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleClick = () => {
    authApi.logout();
    setIslogged(false);
    setUserName("");
    toast.info("Vous êtes maintenant déconnecté.e !");
    history.push("/login");
  };
  const itemsPerPage = 5;
  const pagesCount = Math.ceil(data.length / itemsPerPage);
  const pages = [];

  for (let i = 0; i <= pagesCount; i++) {
    pages.push(i);
  }

  const start = currentPage * itemsPerPage - itemsPerPage;
  const paginatedData = data.slice(start, start + itemsPerPage);

  return (
    <>
      {articleshow && <ArticleCreation setArticleshow={setArticleshow} />}
      <div className="mt-3 px-4 mb-6">
        <div>
          <h1 className="text-xl 2xl:text-3xl font-bold uppercase">
            Gestion du blog PayQin
          </h1>
        </div>
        {isLogged && (
          <div className="mt-3">
            {" "}
            <p>
              Connecté avec <b>{userName}</b>{" "}
            </p>{" "}
          </div>
        )}

        <div className="grid grid-cols-5">
          <div className="grid">
            <AdminMenu setArticleshow={setArticleshow} />
            <div className="mt-5">
              <p>
                <button
                  className="text-red-400 font-bold hover:text-red-900 text-lg h-8 w-36 rounded border-red-200 border-2"
                  onClick={handleClick}
                >
                  Déconnexion
                </button>
              </p>
            </div>
          </div>
          <div className="grid col-span-4">
            <div className="mt-3">
              <div className="w-full h-96 rounded border border-md shadow-lg">
                <table className="table-fixed w-full mt-4 ml-4">
                  <thead className="text-sm select-none 2xl:text-lg">
                    <tr>
                      <th className="text-left">Date de création</th>
                      <th className="text-left w-1/3">Titre de l'article</th>
                      <th className="text-center">Auteur</th>
                      <th className="text-center">Vues</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  {data && (
                    <ArticleTable
                      data={paginatedData}
                      setData={setData}
                      loading={loading}
                      setLoading={setLoading}
                    />
                  )}
                </table>
                <Pagination
                  currentPage={currentPage}
                  pagesCount={pagesCount}
                  handleChangePage={handleChangePage}
                  start={start}
                  itemsPerPage={itemsPerPage}
                  pages={pages}
                />
              </div>
            </div>
            <div className="mt-3">
              <div className="w-full h-auto rounded border border-md shadow-lg">
                <table className="table-fixed w-full mt-4 ml-4">
                  <thead className="text-sm 2xl:text-lg select-none">
                    <tr>
                      <th className="text-left w-1/2">Nom de la catégorie</th>
                      <th className="text-center">Nombres d'articles</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  {cat && <CatTable data={cat} setCat={setCat} />}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
