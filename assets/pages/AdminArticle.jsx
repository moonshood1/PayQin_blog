import React, { useEffect, useState } from "react";
import AdminMenu from "../components/wrappers/AdminMenu";
import authApi from "../services/authAPI";
import Field from "../components/forms/Field";
import LongField from "../components/forms/TextareaField";
import articleAPI from "../services/articleAPI";
import Select from "../components/forms/Select";
import axios from "axios";
import { toast } from "react-toastify";

const ArticlePage = (props) => {
  const { userName, isLogged, setIslogged, history, setUserName } = props;
  const { id = "new" } = props.match.params;
  const [article, setArticle] = useState({
    title: "",
    image: "",
    content: "",
    category: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    image: "",
    content: "",
    category: "",
  });
  const [editing, setEditing] = useState(false);
  const [cat, setCat] = useState([]);

  // Recupération de l'article en fonction de l'id

  const fetchArticle = async (id) => {
    try {
      const { title, image, content } = await articleAPI.find(id);
      setArticle({ title, image, content });
    } catch (error) {
      toast.error("Erreur lors du chargement de l'article");
      console.log(error.response);
    }
  };

  // Gestion des changements des valeurs des input

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setArticle({ ...article, [name]: value });
  };

  // Gestion de la soumission du formulaire

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrors({});
      if (editing) {
        await articleAPI.update(id, article);
        toast.info("Article modifié avec succès");
      } else {
        await articleAPI.create(article);
        toast.success("Article créé avec succès");
        history.replace("/admin");
      }
    } catch ({ response }) {
      const { violations } = response.data;
      if (violations) {
        const apiErrors = {};
        violations.forEach(({ propertyPath, message }) => {
          apiErrors[propertyPath] = message;
        });
        setErrors(apiErrors);
      }
      toast.error("Une erreur est survenue");
    }
  };

  // Chargement de l'username et des données de l'article (si besoin est)

  useEffect(() => {
    if (id !== "new") {
      setEditing(true);
      fetchArticle(id);
    }
    axios
      .get("http://127.0.0.1:8000/get_all_categories")
      .then((response) => response.data)
      .then((data) => {
        setCat(data);
      })
      .catch((error) => {
        console.log(error.response);
        toast.error("Impossible de charger les catégories");
      });
    setUserName(localStorage.getItem("username"));
  }, [id]);

  // Gestion de la deconnexion

  const handleClick = () => {
    authApi.logout();
    setIslogged(false);
    setUserName("");
    toast.info("Vous êtes maintenant déconnecté.e !");
    history.push("/login");
  };

  return (
    <>
      {" "}
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

        <div className="grid md:grid-cols-5">
          <div className="grid w-full md:w-auto">
            <AdminMenu />
            <div>
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
            <div className="bg-white rounded w-full mx-2 border-gray-300 border-2 shadow-lg mt-3">
              <div className="mt-2 flex w-full justify-center border-gray-400 border-b-2 pb-2">
                <h2 className="font-bold text-xl text-gray-700">
                  {(!editing && <span>Création d'un article</span>) || (
                    <span>Modification d'un article</span>
                  )}
                </h2>
              </div>
              <form onSubmit={handleSubmit}>
                <Field
                  name="title"
                  type="text"
                  label="Titre de l'article"
                  value={article.title}
                  onChange={handleChange}
                  placeholder="Accept payments anywhere—save on SumUp"
                  error={errors.title}
                />
                <Field
                  name="image"
                  type="text"
                  label="Image de l'article"
                  value={article.image}
                  onChange={handleChange}
                  placeholder="https://www.payqin.com/wp-content/uploads/2020/09/n3-1.png"
                  error={errors.image}
                />
                <Select
                  name="category"
                  value={article.category}
                  label="Catégorie de l'article"
                  onChange={handleChange}
                  error={errors.category}
                >
                  {cat &&
                    cat.map((categorie) => (
                      <option
                        key={categorie.id}
                        value={`/api/categories/${categorie.id}`}
                      >
                        {categorie.name}
                      </option>
                    ))}
                </Select>
                <LongField
                  value={article.content}
                  onChange={handleChange}
                  name="content"
                  label="Contenu de l'article"
                  placeholder="lorem ipsum"
                  error={errors.content}
                />
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2"
                  >
                    {(!editing && <span>Create</span>) || <span>Save</span>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default ArticlePage;
