/* eslint-disable camelcase */
/* eslint-disable new-cap */
import "@/styles/globals.css";
import React from "react";
import Layout from "@/components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import { Teko, Gideon_Roman } from "next/font/google";
import Head from "next/head";

const teko = Teko({
  variable: "--teko-font",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const giden = Gideon_Roman({
  variable: "--giden-font",
  weight: ["400"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  return (
    <div className={`w-full overflow-clip ${teko.variable} ${giden.variable}`}>
      <Head>
        <title>IEEE at UCR</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
