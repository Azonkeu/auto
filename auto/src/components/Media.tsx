import React from "react";
import styles from "../../styles/media.module.css";
import Header from "./Header";

interface Med {
  id: number;
  name: string;
  createdAt: string;
  type: string;
  url: string;
}

interface Props {
  carMediaList?: Med[];
  id: string;
}

const Media: React.FC<Props> = ({ carMediaList, id }) => {
  return (
    <div>
      <Header />
      <div className={styles.data}>
        <h2 className={styles.makes}>Media for {id}</h2>
        <div
          className={
            carMediaList?.length === 0 ? `${styles.listemp}` : `${styles.list}`
          }
        >
          {carMediaList?.length === 0 ? (
            <p className={styles.empty}>
              There is no media for this car. Check back later.
            </p>
          ) : (
            carMediaList?.map((car) => {
              if (car.type === "image/jpeg" || car.type === "image/webp") {
                return (
                  <div className={styles.img} key={car.id}>
                    <img
                      src={car.url}
                      alt="car image"
                      className={styles.image}
                    />
                    <p className={styles.name}>{car.name}</p>
                    <p className={styles.create}>
                      <span className={styles.date}>Created on:</span>
                      {car.createdAt}
                    </p>
                  </div>
                );
              } else {
                return (
                  <div className={styles.vid} key={car.id}>
                    <video width="100%" height="240" controls>
                      <source src={car.url} type={car.type} />
                      Your browser does not support the video tag.
                    </video>
                    <p className={styles.name}>{car.name}</p>
                    <p className={styles.create}>
                      <span className={styles.date}>Created on:</span>{" "}
                      {car.createdAt}
                    </p>
                  </div>
                );
              }
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Media;
