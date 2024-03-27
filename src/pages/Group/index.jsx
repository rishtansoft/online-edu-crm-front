import data from '../../data/data.json';
import styles from './index.module.css';
import remove from '../../assets/delete.svg';
import edit from '../../assets/edit.svg';
import { useState } from 'react';
import { createPortal } from 'react-dom'; 
import ModalContent from '../../components/Modal';

export default function Group() {
  const [showModal, setShowModal] = useState(false);

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
          {data.rows2.map((e, i) => (
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

      <button onClick={() => setShowModal(true)}>Guruh qo'shish</button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </div>
  );
}
