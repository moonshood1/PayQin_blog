import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/wrappers/Navbar";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Detail from "./pages/Details";
import "./styles/app.css";

const App = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <HashRouter>
      <div>
        <div className="navbar">
          <Navbar showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
        </div>
        <main>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
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
        </main>
      </div>
    </HashRouter>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
