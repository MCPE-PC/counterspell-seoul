import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Hack Club's fall hackathon, open to all high schoolers."
        />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <title>Counterspell</title>
      </Head>
      <Script
        defer
        data-domain="counterspell.hackclub.com"
        src="https://plausible.io/js/script.js"
      ></Script>
      <Component {...pageProps} />
    </>
  );
}
