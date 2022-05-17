import React from "react";
import Head from "next/head";
import Cars from "../src/components/Cars";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import styles from "../styles/cars.module.css";

interface Carsx {
  id: number;
  title: string;
  imageUrl: string;
  city: string;
  state: string;
  sold: boolean;
}

interface Props {
  data: Carsx[];
}

const Car: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Cars</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>Cars Available</h2>
        <div className={styles.cardiv}>
          <Cars data={data} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    "https://api-prod.autochek.africa/v1/inventory/car/search"
  );
  const data = await res.json();

  return {
    props: {
      data: data.result,
    },
  };
}

export default Car;
