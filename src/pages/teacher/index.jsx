import styles from "./index.module.css"
import { CiSearch } from "react-icons/ci";

function Teacher() {
  return (
    <div className={styles.home}>
      <h1>O'qituvchilar</h1>
      <div className={styles.search}>
        <h3><CiSearch /></h3>
        <input type="text" placeholder="Qiqiruv" />
      </div>
      <div className={styles.table}>
        <table>
          <thead>
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
          </tbody>
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
        </table>
      </div>
    </div>
  )
}

export default Teacher