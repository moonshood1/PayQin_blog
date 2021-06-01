import React, { useState, useEffect } from "react";
import AdminMenu from "../components/wrappers/AdminMenu";
import Field from "../components/forms/Field";
import categoryApi from "../services/categoryAPI";
import { toast } from "react-toastify";

const CategoryPage = (props) => {
  const { userName, isLogged, setIslogged, history, setUserName } = props;
  const { id = "new" } = props.match.params;

  const [category, setCategory] = useState({
    name: "",
  });

  const [errors, setErrors] = useState({
    name: "",
  });

  const [editing, setEditing] = useState(false);

  const fetchCategory = async (id) => {
    try {
      const { name } = await categoryApi.find(id);
      setCategory({ name });
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editing) {
        await categoryApi.update(id, category);
      } else {
        await categoryApi.create(category);
        setErrors({});
        toast.success("Catégorie créée avec succès");
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

  useEffect(() => {
    if (id !== "new") {
      setEditing(true);
      fetchCategory(id);
    }
    setUserName(localStorage.getItem("username"));
  }, [id]);

  const handleClick = () => {
    authApi.logout();
    setIslogged(false);
    setUserName("");
    toast.info("Vous êtes maintenant déconnecté.e !");
    history.push("/login");
  };

  return (
    <>
      <div className="mt-3 px-4 mb-6">
        <div>
          <h1 className="text-xl 2xl:text-3xl font-bold uppercase">
            Gestion des catégories du blog PayQin
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
                  {(!editing && <span>Création d'une catégorie</span>) || (
                    <span>Modification d'une catégorie</span>
                  )}
                </h2>
              </div>
              <form onSubmit={handleSubmit}>
                <Field
                  name="name"
                  type="text"
                  label="Nom de la catégorie"
                  value={category.name}
                  onChange={handleChange}
                  placeholder="Tutorials"
                  error={errors.name}
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

export default CategoryPage;
