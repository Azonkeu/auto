import React from "react";
import Head from "next/head";
import Makes from "../src/components/Makes";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import styles from "../styles/app.module.css";
import Search from "../src/components/Search";

interface Car {
  id: number;
  name: string;
  imageUrl: string;
}

interface Props {
  cars: Car[];
}

const Home: React.FC<Props> = ({ cars }) => {
  return (
    <div className="container">
      <Head>
        <title>Car Rental</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="../styles/app.css" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.imx}></div>
        <h1 className={styles.text}>
          <span className={styles.letter}>O</span>ur{" "}
          <span className={styles.letter}>n</span>ew{" "}
          <span className={styles.letter}>P</span>roducts
        </h1>
        <div className={styles.section}>
          <Makes cars={cars} />
          <Search />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.staging.myautochek.com/v1/inventory/make?popular=true"
  );
  const data = await res.json();

  return {
    props: {
      cars: data.makeList,
    },
  };
}

export default Home;
