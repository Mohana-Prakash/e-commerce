import React from "react";
import "../app/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Provider store={store}>
      <Head>
        <title>Tanjore Nature Nest</title>
      </Head>
      <ToastContainer />
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}

export default MyApp;
