import React from "react";
import styles from "../../styles/search.module.css";

const Search = () => {
  return (
    <div className={styles.search}>
      <h3 className={styles.tex}>Search Here...</h3>
      <div className={styles.first}>
        <input
          type="search"
          name="search"
          placeholder="search"
          className={styles.inpt}
        />
        <button type="button" className={styles.bt}></button>
      </div>
      <span className={styles.spa}></span>
      <h3 className={styles.tex}>Price</h3>
      <div>
        <p>Under $1,000</p>
        <p>$1,000 - $5000</p>
        <p>$5000 - $10000</p>
        <p>$10000 - $20000</p>
        <p>$20000 - $30000</p>
        <p>Over $30000</p>
      </div>
      <h3 className={styles.tex}>Discount</h3>
      <div>
        <input type="checkbox" id="discount1" name="discount1" value="5" />
        <label> 5% or More</label> <br />
      </div>
      <div>
        <input type="checkbox" id="discount2" name="discount2" value="10" />
        <label> 10% or More</label>
        <br />
      </div>
      <div>
        <input type="checkbox" id="discount3" name="discount3" value="20" />
        <label> 20% or More</label>
        <br />
      </div>
      <div>
        <input type="checkbox" id="discount4" name="discount4" value="30" />
        <label>30% or More</label>
        <br />
      </div>
      <div>
        <input type="checkbox" id="discount5" name="discount5" value="50" />
        <label>50% or More</label>
        <br />
      </div>
      <h3 className={styles.tex}>Cash On Delivery</h3>
      <div>
        <input type="checkbox" id="cash" name="cash" value="cash" />
        <label>Eligible for Cash On Delivery</label>
        <br />
      </div>
      <h3 className={styles.tex}>New Arrivals</h3>
      <div>
        <input type="checkbox" id="day3" name="day30" value="one" />
        <label>last 30 days</label>
        <br />
      </div>
      <div>
        <input type="checkbox" id="day9" name="day90" value="three" />
        <label>last 90 days</label>
        <br />
      </div>
    </div>
  );
};

export default Search;
