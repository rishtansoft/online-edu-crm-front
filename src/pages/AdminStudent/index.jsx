import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import styles from "./index.module.css"
import edit from "../../assets/edit.svg"
import delet from "../../assets/delete.svg"

function AdminStudent() {

  const navigate = useNavigate();

  function handleStudent() {
    navigate("/student")
  }
  
  function handleDelete(e) {
    e.preventDefault()

    confirm("haqiqatan ham o'chirmoqchimisiz")
  }

  useEffect(() => {
    fetch("http://localhost:3000/teachers")
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
  },[])

  return (
    <div className={styles.home}>
      <h1>Admin Group Students</h1>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>ID</th>
              <th>Ismi Familya</th>
              <th>Teleon raqam</th>
              <th>Parol</th>
              <th>Login</th>
              <th className={styles.amallar}>Amallar</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className={styles.id}>23456</td>
              <td  className={styles.name} onClick={handleStudent}>Durdona Egamberdiyeva</td>
              <td>+998933322222</td>
              <td>8645</td>
              <td>3275</td>
              <td className={styles.amallar}><img src={edit}/> <img src={delet} onClick={handleDelete}/></td>
            </tr>
            <tr>
              <td className={styles.id}>23456</td>
              <td className={styles.name}  onClick={handleStudent}>Durdona Egamberdiyeva</td>
              <td>+998933322222</td>
              <td>8645</td>
              <td>3275</td>
              <td className={styles.amallar}><img src={edit}/> <img src={delet} onClick={handleDelete}/></td>
            </tr>
            <tr>
              <td className={styles.id}>23456</td>
              <td  className={styles.name} onClick={handleStudent}>Durdona Egamberdiyeva</td>
              <td>+998933322222</td>
              <td>8645</td>
              <td>3275</td>
              <td className={styles.amallar}><img src={edit}/> <img src={delet} onClick={handleDelete}/></td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default AdminStudent
