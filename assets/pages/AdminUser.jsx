import React, { useEffect, useState } from "react";
import authApi from "../services/userAPI";
import Field from "../components/forms/Field";
import AdminMenu from "../components/wrappers/AdminMenu";
import userApi from "../services/userAPI";
import { toast } from "react-toastify";

const UserPage = (props) => {
  const { userName, isLogged, setIslogged, history, setUserName } = props;
  const { id = "new" } = props.match.params;
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    picture: "",
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    firstName: "",
    lastName: "",
    picture: "",
    password: "",
    passwordConfirm: "",
  });

  // Gestion des changements des valeurs des input

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUser({ ...user, [name]: value });
  };

  // Gestion de la soumission du formulaire

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiErrors = {};

    if (user.password != user.passwordConfirm) {
      apiErrors.passwordConfirm =
        "Le mot de passe n'est pas conforme au mot de passe original";
      setErrors(apiErrors);
      toast.error("Une erreur est survenue");
      return;
    }

    try {
      await userApi.create(user);
      setErrors({});
      history.replace("/admin");
    } catch (error) {
      console.log(error.response);
      const { violations } = error.response.data;
      if (violations) {
        violations.forEach((violation) => {
          apiErrors[violation.propertyPath] = violation.message;
        });
        setErrors(apiErrors);
      }
      toast.error("Une erreur est survenue");
    }
    console.log(user);
  };

  // Chargement de l'username

  useEffect(() => {
    setUserName(localStorage.getItem("username"));
  }, []);

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
      <div className="mt-3 px-4 mb-6">
        <div>
          <h1 className="text-xl 2xl:text-3xl font-bold uppercase">
            Gestion des modérateurs du blog PayQin
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
                  <span>Création d'un modérateur</span>
                </h2>
              </div>
              <form onSubmit={handleSubmit}>
                <Field
                  name="firstName"
                  type="text"
                  label="First Name"
                  value={user.firstName}
                  onChange={handleChange}
                  placeholder="Louis Roger"
                  error={errors.firstName}
                />
                <Field
                  name="lastName"
                  type="text"
                  label="Last Name"
                  value={user.lastName}
                  onChange={handleChange}
                  placeholder="Guirika"
                  error={errors.lastName}
                />
                <Field
                  name="email"
                  type="email"
                  label="Email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="louisroger@payqin.com"
                  error={errors.email}
                />
                <Field
                  name="password"
                  type="password"
                  label="Password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="***************"
                  error={errors.password}
                />
                <Field
                  name="passwordConfirm"
                  type="password"
                  label="Confirm Password"
                  value={user.passwordConfirm}
                  onChange={handleChange}
                  placeholder="***************"
                  error={errors.passwordConfirm}
                />
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2"
                  >
                    <span>Create</span>
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

export default UserPage;
