import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Details";
import "./styles/app.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <Switch>
          <div>
            <Route path="/details">
              <Detail />
            </Route>
          </div>
          <div>
            <Route path="/">
              <Home />
            </Route>
          </div>
        </Switch>
      </div>
    </HashRouter>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
