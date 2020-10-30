import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./App";
import AddMovie from "./components/AddMovie";
import MovieDetailSection from "./components/MovieDetailSection";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const history = createBrowserHistory();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Header />
      <main>
        <Switch>
          <Route path="/add-movie">
            <AddMovie />
          </Route>
          <Route path="/booking-page/:movieId">
            <MovieDetailSection />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </main>
    </Router>
  </React.StrictMode>,
  rootElement
);