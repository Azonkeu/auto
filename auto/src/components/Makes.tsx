import React from "react";
import styles from "../../styles/makes.module.css";

interface Makes {
  id: number;
  name: string;
  imageUrl: string;
}

interface Prop {
  cars: Makes[];
}

const Makes: React.FC<Prop> = ({ cars }) => {
  return (
    <div className={styles.data}>
      <h2 className={styles.makes}>All Popular Makes</h2>
      <div className={styles.list}>
        {cars.map((car) => {
          return (
            <div key={car.id} className={styles.car}>
              <img src={car.imageUrl} alt="car image" className={styles.pic} />
              <span className={styles.spa}></span>
              <h3>{car.name}</h3>
              <div className={styles.pblock}>
                {" "}
                <p className={styles.price}>$5000.00 </p>{" "}
                <p className={styles.out}>$5800.00</p>
              </div>
              <button type="button" className={styles.add}>
                ADD TO CART
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Makes;
