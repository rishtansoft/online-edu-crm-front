import styles from './index.module.css';
import message from '../../assets/message.svg';
import export1 from '../../assets/export.svg';
import search from '../../assets/search.svg';
import data from '../../data/data.json';
import tolov from '../../assets/tolov.svg';

export default function Students() {
  return (
    <div className={styles['students']}>
      <div className={styles['students-top']}>
        <div className={styles['students-search']}>
          <img src={search} alt="search" />
          <input type="search" placeholder='Qidiruv' id="search" />
        </div>
        <div className={styles['students-btns']}>
          <button style={{ background: '#F4A261' }}>
            <img src={message} alt="message" />
            Xabar
          </button>
          <button>
            <img src={export1} alt="Export" />
            Export
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>ID</th>
            <th>Ism Familiya Otasining ismi</th>
            <th>Guruhi</th>
            <th>Ustozi</th>
            <th>Telefon raqami</th>
            <th>To‘lov</th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map((e, i) => (
            <tr key={i}>
              <td><input type="checkbox" /></td>
              <td>{e.id}</td>
              <td>{e.parents}</td>
              <td>{e.group}</td>
              <td>{e.teacher}</td>
              <td>{e.number}</td>
              <td style={{ display: 'flex', justifyContent:'space-between', paddingRight:'20px' }}>
                <button id={`${styles['student-btn']}`}>{e.pay}</button>
                <img src={tolov} alt="tolov" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
