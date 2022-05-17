import React from "react";
import styles from "../../styles/car.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

interface Carx {
  id: number;
  title: string;
  imageUrl: string;
  city: string;
  state: string;
  sold: boolean;
}

interface Pro {
  data: Carx[];
}

const Cars: React.FC<Pro> = ({ data }) => {
  const router = useRouter();
  return (
    <div className={styles.datdiv}>
      {data.map((car) => {
        return (
          <div key={car.id} className={styles.car}>
            <Link href={`/${car.id}`}>
              <img
                src={car.imageUrl}
                alt="car image"
                className={styles.carpic}
              />
            </Link>
            <h3>{car.title}</h3>
            <div className={styles.pblock}>
              <p className={styles.price}><span className={styles.cit}>City:</span> {car.city}</p>
              <p className={styles.out}><span className={styles.cit}>State:</span> {car.state}</p>
            </div>
            <button
              type="button"
              className={styles.add}
              onClick={() => {
                router.push({
                  pathname: "/[id]",
                  query: { id: car.id },
                });
              }}
            >
              ADD TO CART
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cars;
