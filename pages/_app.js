import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="" />
        <link rel="icon" href="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
