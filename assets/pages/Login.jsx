import React, { useState, useEffect } from "react";

const Login = () => {
  const [name, setName] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/get_last_four")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setName(data);
      });
  }, []);
  return <>{name && name.map((n) => <h1> This is the login page</h1>)}</>;
};

export default Login;
