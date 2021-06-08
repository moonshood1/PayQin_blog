import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import categoryAPI from "../../services/categoryAPI";

const CatTable = ({ data, setCat, catLoading }) => {
  const handleDelete = (id) => {
    alert("Attention ! Vous allez supprimer une catégorie");
    const originalData = [...data];
    setCat(data.filter((cat) => cat.id !== id));
    try {
      categoryAPI.suppress(id);
      toast.success("Catégorie supprimée avec succès");
    } catch (error) {
      console.log(error.response);
      toast.error("Une erreur est survenue");
      setCat(originalData);
    }
  };
  return (
    <tbody>
      {data.map((cat) => (
        <tr key={cat.id} className="text-sm 2xl:text-md">
          <td className="h-12 select-none"> {cat.name} </td>
          <td className="text-center select-none"> {cat.article.length} </td>
          <td className="text-center">
            <div className="text-gray-500">
              <Link to={`/admin/category/${cat.id}`}>
                <motion.button
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
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
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </motion.button>
              </Link>
              <motion.button
                onClick={() => handleDelete(cat.id)}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                disabled={cat.article.length > 0}
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </motion.button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default CatTable;
