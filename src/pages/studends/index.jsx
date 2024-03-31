import styles from "./index.module.css";

function Index() {
  
  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.id}>
              <p>ID</p>
            </th>
            <th className={styles.name}>
              <p>Ism Familiya Otasining ismi</p>
            </th>
            <th className={styles.data}>
              <p>Tug‘ilgan sanasi</p>
            </th>
            <th className={styles.group}>
              <p>Guruhi</p>
            </th>
            <th className={styles.number}>
              <p>Tel Raqami</p>
            </th>
            <th className={styles.login}>
              <p>Login Parol</p>
            </th>
            <th className={styles.actions}>
              <p></p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.info}>
            <td className={styles.StudentId}>
              <p>ID18493</p>
            </td>
            <td className={styles.StudentName}>
              <p>Abbosxonov Muhammadmustafo</p>
            </td>
            <td className={styles.StudentData}>
              <p>12.02.2024</p>
            </td>

            <td className={styles.StudentGroup}>
              <p>Group 17</p>
            </td>
            <td className={styles.StudentNumber}>
              <p>+998912345678</p>
            </td>

            <td className={styles.StudentLogin}>
              <p>ID12345</p>
              <span>998912345678</span>
            </td>
            <td className={styles.StudentActions}>
              {/* <p onClick={openModal}>&#x2630;</p> */}
            </td> 
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Index;
