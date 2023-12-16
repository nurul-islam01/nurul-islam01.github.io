import React, { memo } from "react";
import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import appConfig from "configs/client";
import routes from "client/routes";
import { makeId } from "client/utils/string";

import "../assets/styles/index.m.css";

const App = () => (
  <div>
    <Helmet {...appConfig.seo} encodeSpecialCharacters={__SERVER__} />
    <Routes>
      {routes.map(({ path, to, element: Element }) => {
        const elementProps = {};
        if (typeof to === "string") {
          elementProps.to = to;
          elementProps.replace = true;
        }
        return <Route path={path} element={<Element {...elementProps} />} key={makeId()} />;
      })}
    </Routes>
    <ToastContainer autoClose={500} hideProgressBar />
  </div>
);

export default memo(App);
