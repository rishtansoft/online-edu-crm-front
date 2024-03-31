import styles from "./index.module.css";

function GroupInfoTeacher() {
  return (
    <div className={styles.groupInfoTeacher__wrapper}>
      <div className={styles.students}>
        <div className={styles.students__heading}>
          <h2>O&lsquo;quvchilar:</h2>
        </div>
        <div className={styles.students__info}>
          <table>
            <thead>
              <tr>
                <th className={styles.id}>ID</th>
                <th className={styles.name}>Ism Familiya Otasining ismi</th>
                <th className={styles.phone}>Telefon raqami</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.id}>1820</td>
                <td className={styles.name}>
                  Durdona Egamberdiyeva Hatamtoyeva
                </td>
                <td className={styles.phone}>+998933322222</td>
              </tr>
              <tr>
                <td className={styles.id}>1820</td>
                <td className={styles.name}>Abduqodir G‘aniyev Alisher o‘g‘li</td>
                <td className={styles.phone}>+998933322222</td>
              </tr>
              <tr>
                <td className={styles.id}>1820</td>
                <td className={styles.name}>Jamoliddin Ergashaliev</td>
                <td className={styles.phone}>+998933322222</td>
              </tr>
              <tr>
                <td className={styles.id}>1820</td>
                <td className={styles.name}>Azizjon Azimjonov</td>
                <td className={styles.phone}>+998933322222</td>
              </tr>
              <tr>
                <td className={styles.id}>1820</td>
                <td className={styles.name}>Jahongir Subhonaliyev</td>
                <td className={styles.phone}>+998933322222</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.lessons__wrapper}>
        <div className={styles.lesson__heading}>
            <h2>Darslar:</h2>
        </div>
        <div className={styles.lessons}>
        <div className={styles.lesson}>
            <h2>1-dars Html</h2>
            <p>26.08.2023</p>
        </div>
        <div className={styles.lesson}>
            <h2>2-dars Css</h2>
            <p>28.08.2023</p>
        </div>
        <div className={styles.lesson}>
            <h2>3-dars Bootstrap</h2>
            <p>30.08.2023</p>
        </div>
        <div className={styles.lesson}>
            <h2>4-dars Tailwind</h2>
            <p>06.09.2023</p>
        </div>
        <button>Darsni boshlash</button>
        </div>
      </div>
    </div>
  );
}

export default GroupInfoTeacher;
