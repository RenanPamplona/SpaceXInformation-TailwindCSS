import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import HeaderFooter from "../src/components/HeaderFooter";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeaderFooter>
      <Component {...pageProps} />
    </HeaderFooter>
  );
}
