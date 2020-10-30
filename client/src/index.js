import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./App";
import MovieDetailSection from "./components/MovieDetailSection";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const history = createBrowserHistory();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <Route path="/movieInfo/:id">
          <MovieDetailSection />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  rootElement
);
