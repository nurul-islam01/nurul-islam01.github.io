import React, { memo } from "react";
import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "@layouts/Header";
import Footer from "@layouts/Footer";

import appConfig from "configs/client";
import routes from "client/routes";
import { makeId } from "client/utils/string";

import "../assets/styles/index.m.css";

const App = () => (
  <>
    <Helmet {...appConfig.seo} encodeSpecialCharacters={__SERVER__} />
    <div className='lm-animated-bg' />
    <div className='preloader'>
      <div className='preloader-animation'>
        <div className='preloader-spinner' />
      </div>
    </div>
    <div className='nurul-scroll-to-top'>
      <i className='lnr lnr-chevron-up' />
    </div>
    <div className='page-scroll'>
      <div className='page-container bg-move-effect' data-animation='transition-flip-in-right' id='page_container'>
        <Header />
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
        <Footer />
      </div>
    </div>
    <ToastContainer autoClose={500} hideProgressBar />
  </>
);

export default memo(App);
