import React, { useState, useEffect } from "react";
import ArticleTable from "../components/content/ArticleTable";
import CatTable from "../components/content/CategorieTable";
import AdminMenu from "../components/wrappers/AdminMenu";
import authApi from "../services/authAPI";

const Admin = ({ isLogged, setIslogged, history, userName, setUserName }) => {
  const [data, setData] = useState([]);
  const [cat, setCat] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/get_all_articles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserName(localStorage.getItem("username"));
        setData(data);
      });
    fetch("http://127.0.0.1:8000/get_all_categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCat(data);
      });
  }, []);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleClick = () => {
    authApi.logout();
    setIslogged(false);
    setUserName("");
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
    <div className="mt-3 px-4 mb-6">
      <div>
        <h1 className="text-xl 2xl:text-3xl font-bold uppercase">
          Gestion des articles du blog PayQin
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
        <AdminMenu />
        <div className="grid col-span-4">
          <div className="mt-3">
            <div className="w-full h-auto rounded border border-md shadow-lg">
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
                  <ArticleTable data={paginatedData} setData={setData} />
                )}
              </table>
              <div className="flex flex-col items-center my-12">
                <div className="flex text-gray-700">
                  <div className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                    <button
                      disabled={currentPage === 0}
                      onClick={() => handleChangePage(currentPage - 1)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-left w-6 h-6"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>
                  </div>
                  <div className="flex h-12 font-medium rounded-full bg-gray-200">
                    {pages.map((page) => (
                      <div
                        key={page}
                        className={
                          "w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full " +
                          (currentPage === page && "bg-teal-600 text-gray-400")
                        }
                        onClick={() => handleChangePage(page)}
                      >
                        {page}
                      </div>
                    ))}
                    <div className="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">
                      2
                    </div>
                  </div>
                  <div className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                    <button
                      disabled={currentPage === pagesCount}
                      onClick={() => handleChangePage(currentPage + 1)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-right w-6 h-6"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
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
          <div className="mt-5 text-right">
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
      </div>
    </div>
  );
};

export default Admin;
