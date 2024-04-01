import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import conf from "../../assets/conf.jpg";
import styles from "./index.module.css";

const Home = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heroInfo}>
        <div className={styles.main}>
          <h1 className={styles.title}>DARSNI BOSHLASH</h1>
        </div>
        <form onSubmit={submitCode} className={styles.form}>
          <div className={styles.label}>Dars mavzusini kiriting</div>
          <input
            type="text"
            required
            placeholder="Dars mavzusini kiriting"
            value={RoomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Boshlash
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
