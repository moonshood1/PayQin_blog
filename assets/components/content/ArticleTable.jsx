import React from "react";
import { motion } from "framer-motion";
import moment from "moment";

const ArticleTable = ({ data, setData }) => {
  const handleDelete = (id) => {
    const originalData = [...data];
    setData(data.filter((article) => article.id !== id));
    fetch(`http://127.0.0.1:8000/api/articles/${+id}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log("Article supprimé");
      })
      .catch((error) => {
        console.log(error.response);
        setData(originalData);
      });
  };
  return (
    <tbody>
      {data.map((article) => (
        <tr key={article.id} className="text-sm 2xl:text-md">
          <td className="h-12 select-none ">
            {" "}
            {moment(article.createAt).format("MMMM DD, YYYY")}{" "}
          </td>
          <td className="h-12 select-none "> {article.title} </td>
          <td className="text-center select-none">
            {" "}
            {article.author.firstName} {article.author.lastName}
          </td>
          <td className="text-center select-none"> {article.likes} </td>
          <td className="text-center">
            <div className="text-gray-500">
              <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </motion.button>{" "}
              <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
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
              <motion.button
                onClick={() => handleDelete(article.id)}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                disabled={article.likes > 7}
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

export default ArticleTable;
