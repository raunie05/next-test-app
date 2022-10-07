import React, { useState } from "react";
import styles from "../styles/counter.module.css";

const Counter: React.FC<any> = () => {
  const [counter, setCount] = useState(0);
  return (
    <div className={styles.container}>
      <p> This is gonna be counter component</p>
      <div>
        <button
          className={styles["counter-btn"]}
          onClick={() => {
            if (counter <= 0) {
              alert(" you cant decrement furthur");
            } else {
              setCount(counter - 1);
            }
          }}
        >
          decrement
        </button>
        <p
          style={{
            textAlign: "center",
          }}
        >
          {counter}
        </p>
        <button
          className={styles["counter-btn"]}
          onClick={() => setCount(counter + 1)}
        >
          increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
