import React from "react";
import './App.css';
import { HistoryRouter } from "redux-first-history/rr6";
import { Route, Routes, Link } from "react-router-dom";
import { store, history } from './store/store'
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Layout } from "./container/layout";
import { Login } from "./container/login";
import { User } from "./container/user";
import { WorkItem } from "./container/work-item";
import { redirect } from "react-router-dom";
const App = () => {
  // Log the initial state
  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route exact
            path="/login"
            element={<Login />}
          />
          <Route
            path="/layout"
            element={<Layout />}
          />
          <Route
            path="/user"
            element={<Layout
              Component={User} />}
          />
          <Route
            path="/"
            element={<Layout
              Component={WorkItem} />}
          />
        </Routes>
        {/* <Layout /> */}

      </HistoryRouter>
    </Provider>

  );
}

export default App;
