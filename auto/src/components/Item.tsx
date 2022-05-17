import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/detail.module.css";

interface Makes {
  name?: string;
  imageUrl?: string;
}

interface Model {
  name?: string;
  wheelType?: string;
  series?: string;
  make?: Makes;
  popular?: boolean;
}

interface Pronx {
  id?: number;
  year?: number;
  state?: string;
  country?: string;
  transmission?: string;
  fuelType?: string;
  sellingCondition?: string;
  imageUrl?: string;
  insured?: boolean;
  marketplacePrice?: number;
  interiorColor?: string;
  exteriorColor?: string;
  websiteUrl?: string;
  model?: Model;
}

const Detail: React.FC<Pronx> = ({
  imageUrl,
  year,
  state,
  country,
  transmission,
  fuelType,
  sellingCondition,
  insured,
  marketplacePrice,
  interiorColor,
  exteriorColor,
  websiteUrl,
  model,
  id,
}) => {
  const router = useRouter();
  return (
    <div className={styles.detai}>
      <p className={styles.url}>
        <span className={styles.inf}>website Url:</span> {websiteUrl}
      </p>
      <div className={styles.detaildiv}>
        <div className={styles.detimg}>
          <div className={styles.btn}>
            <button
              type="button"
              className={styles.lin}
              onClick={() => {
                router.push({
                  pathname: "/car_media/[id]",
                  query: { id: id },
                });
              }}
            >
              View car media
            </button>
          </div>
          <img src={imageUrl} alt="car image" className={styles.img} />
        </div>
        <div className={styles.det}>
          <div className={styles.deone}>
          <p>
              <span className={styles.inf}>id:</span> {id}
            </p>
            <p>
              <span className={styles.inf}>Year:</span>
              {year}
            </p>
            <p>
              <span className={styles.inf}>State:</span> {state}
            </p>
            <p>
              <span className={styles.inf}>Country:</span> {country}
            </p>
            <p>
              <span className={styles.inf}>Transmission</span>
              {!transmission ? "Yes" : "No"}
            </p>
            <p>
              <span className={styles.inf}>Fuel type:</span> {fuelType}
            </p>
            <p>
              <span className={styles.inf}>selling Condition:</span>{" "}
              {sellingCondition}
            </p>
            <p>
              <span className={styles.inf}>insured:</span>{" "}
              {!insured ? "Yes" : "No"}
            </p>
          </div>
          <div className={styles.detwo}>
            <p>
              <span className={styles.inf}>Price:</span> {marketplacePrice}
            </p>
            <p>
              <span className={styles.inf}>interior Color:</span>{" "}
              {interiorColor}
            </p>
            <p>
              <span className={styles.inf}>exterior Color:</span>{" "}
              {exteriorColor}
            </p>
            <p>
              <span className={styles.inf}>Model name:</span> {model?.name}
            </p>
            <p>
              <span className={styles.inf}>Wheel type:</span> {model?.wheelType}
            </p>
            <p>
              <span className={styles.inf}>Popular:</span>{" "}
              {!model?.popular ? "Yes" : "No"}
            </p>
            <p>
              <span className={styles.inf}>Series:</span> {model?.series}
            </p>
            <p>
              <span className={styles.inf}>Make:</span> {model?.make?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
