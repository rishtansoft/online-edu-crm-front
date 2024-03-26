import styles from "./index.module.css"

function Teacher() {
  return (
    <div className={styles.home}>
      <h1>O&apos;qituvchilar</h1>
      
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>ID</th>
              <th>Ism Familfa</th>
              <th>Guruh</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>23456</td>
              <td>Durdona Egamberdiyeva</td>
              <td>Beginner 1</td>
            </tr>

            <tr>
              <td>23456</td>
              <td>Durdona Egamberdiyeva</td>
              <td>Beginner 1</td>
            </tr>
            <tr>
              
              <td>23456</td>
              <td>Durdona Egamberdiyeva</td>
              <td>Beginner 1</td>
            </tr>
            <tr>
              <td>23456</td>
              <td>Durdona Egamberdiyeva</td>
              <td>Beginner 1</td>
            </tr>
          </tbody>
            
        </table>
      </div>
    </div>
  )
}

export default Teacher