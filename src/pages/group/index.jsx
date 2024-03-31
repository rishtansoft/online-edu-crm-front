import styles from './index.module.css';
import remove from '../../assets/delete.svg';
import edit from '../../assets/edit.svg';
import { useState } from 'react';

function Group() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([
    { "id": 100, "parents": "Ingliz tili", "number1": "24", "time": "08:30-10:30", "number": "2023-05-11" },
    { "id": 101, "parents": "Matematika", "number1": "23", "time": "14:00-16:00", "number": "2024-01-15" },
    { "id": 102, "parents": "Arab tili", "number1": "15", "time": "08:30-10:30", "number": "2023-08-15" },
    { "id": 103, "parents": "Tarix", "number1": "15", "time": "14:00-16:00", "number": "2023-11-20" },
    { "id": 104, "parents": "Matematika", "number1": "24", "time": "16:00-18:00", "number": "2023-11-20" },
    { "id": 105, "parents": "Arab tili", "number1": "15", "time": "10:00-12:00", "number": "2023-08-15" },
    { "id": 106, "parents": "Arab tili", "number1": "23", "time": "10:00-12:00", "number": "2024-01-15" },
    { "id": 107, "parents": "Ingliz tili", "number1": "15", "time": "08:30-10:30", "number": "2023-11-20" },
    { "id": 108, "parents": "Tarix", "number1": "23", "time": "16:00-18:00", "number": "2023-05-11" },
    { "id": 109, "parents": "Ingliz tili", "number1": "24", "time": "16:00-18:00", "number": "2023-05-11" },
    { "id": 110, "parents": "Matematika", "number1": "24", "time": "14:00-16:00", "number": "2023-08-15" },
    { "id": 111, "parents": "Tarix", "number1": "15", "time": "10:00-12:00", "number": "2024-01-15" }
  ]
)

  return (
    <div className={styles['Group']}>
      <table>
        <thead>
          <tr>
            <th>Guruh nomi</th>
            <th>Yonalishi</th>
            <th>oquvchilar soni</th>
            <th>Dars vaqtlari</th>
            <th>start-end</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => (
            <tr key={i}>
              <td>{e.id}</td>
              <td>{e.parents}</td>
              <td>{e.number1}</td>
              <td>{e.time}</td>
              <td>{e.number}</td>
              <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                <img id={styles['edit-btn']} src={edit} alt="edit" />
                <img id={styles['remove-btn']} src={remove} alt="remove" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => setShowModal(true)}>Guruh qo&#39;shish</button>
      
    </div>
  );
}

export default Group

