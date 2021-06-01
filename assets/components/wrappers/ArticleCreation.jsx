import React, { useState } from "react";
import { motion } from "framer-motion";
import Field from "../forms/Field";
import LongField from "../forms/TextareaField";
import axios from "axios";

const ArticleCreation = () => {
  const [article, setArticle] = useState({
    title: "",
    image: "",
    content: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    image: "",
    content: "",
  });

  const mainVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.2,
      },
    },
  };

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setArticle({ ...article, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(article);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/articles",
        article
      );
      setErrors({});
    } catch (error) {
      if (error.response.data.violations) {
        const apiErrors = {};
        error.response.data.violations.forEach((violation) => {
          apiErrors[violation.propertyPath] = violation.message;
        });
        setErrors(apiErrors);
      }
    }
  };
  return (
    <>
      <div className="h-screen w-full z-20 flex justify-center absolute ">
        <motion.div
          variants={mainVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded w-full h-full mx-2 sm:mx-0 sm:h-4/5 sm:w-3/4 mt-16 border-gray-300 border-2 shadow-lg"
        >
          <div className="mt-2 flex w-full justify-center border-gray-400 border-b-2 pb-2">
            <h2 className="font-bold text-xl text-gray-700">
              Création d'un article
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
            <Field
              name="image"
              type="text"
              label="Image de l'article"
              placeholder="https://www.payqin.com/wp-content/uploads/2020/09/n3-1.png"
            />
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
                Save
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default ArticleCreation;
