import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/wrappers/Navbar";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Detail from "./pages/Details";
import authApi from "./services/authAPI";
import "./styles/app.css";
import ArticlePage from "./pages/AdminArticle";
import CategoryPage from "./pages/AdminCategory";
import UserPage from "./pages/AdminUser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

authApi.setup();

const App = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isLogged, setIslogged] = useState(authApi.isAuthenticated());
  const [userName, setUserName] = useState(null);

  return (
    <HashRouter>
      <div>
        <div className="navbar">
          <Navbar showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
        </div>
        <main>
          <Switch>
            <Route
              path="/login"
              render={(props) => (
                <Login
                  setIslogged={setIslogged}
                  {...props}
                  setUserName={setUserName}
                />
              )}
            ></Route>
            <Route
              path="/admin/user/new"
              render={(props) =>
                isLogged ? (
                  <UserPage
                    setIslogged={setIslogged}
                    isLogged={isLogged}
                    userName={userName}
                    {...props}
                    setUserName={setUserName}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            ></Route>
            <Route
              path="/admin/category/:id"
              render={(props) =>
                isLogged ? (
                  <CategoryPage
                    setIslogged={setIslogged}
                    isLogged={isLogged}
                    userName={userName}
                    {...props}
                    setUserName={setUserName}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            ></Route>
            <Route
              path="/admin/article/:id"
              render={(props) =>
                isLogged ? (
                  <ArticlePage
                    setIslogged={setIslogged}
                    isLogged={isLogged}
                    userName={userName}
                    {...props}
                    setUserName={setUserName}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            ></Route>
            <Route
              path="/admin"
              render={(props) =>
                isLogged ? (
                  <Admin
                    isLogged={isLogged}
                    setIslogged={setIslogged}
                    userName={userName}
                    setUserName={setUserName}
                    {...props}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            ></Route>
            <Route path="/article/:id">
              <Detail
                showOverlay={showOverlay}
                setShowOverlay={setShowOverlay}
              />
            </Route>
            <Route path="/">
              <Home showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
            </Route>
          </Switch>
          <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
        </main>
      </div>
    </HashRouter>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
