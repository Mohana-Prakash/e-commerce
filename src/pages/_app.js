import React from "react";
import "../app/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Head>
          <title>Tanjore Nature Nest</title>
        </Head>
        <ToastContainer />
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
