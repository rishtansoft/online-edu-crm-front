import React from 'react'
import edit from '../../assets/edit.svg'
import styles from './index.module.css'
import human from '../../assets/human.png'

export default function Teacher() {
    return (
        <div>
            <header className={styles['teacher-profile-edit']}>
                <h1>Palonchi Palonchiyev ma’lumotlari</h1>
                <img src={edit} alt="edit" />
            </header>
            <div className={styles['teacher-profile-about']}>
                <img src={human} alt="man" />
                <div className={styles['teacher-profile-display']}>
                    <div className={styles['teacher-profile-noedit']}>
                        <p>Ism familiya</p><hr />
                        <p>Otasining ismi</p><hr />
                        <p>Jinsi</p><hr />
                        <p>Tug‘ilgan sana</p><hr />
                        <p>Manzili</p><hr aria-setsize={1} />
                        <p>Telefon raqami</p><hr />
                        <p>Login</p><hr />
                        <p>Telegram ID</p><hr />
                        <p>Guruhlar soni</p>
                    </div>
                    <div className={styles['teacher-profile-editor']}>
                        <p>Jamoliddin Ergashev</p>
                        <p>Jahongir o‘g‘li</p>
                        <p>Erkak</p>
                        <p>13.08.2000</p>
                        <p>Xurramobod 19</p>
                        <p>+998 90 777 00 35</p>
                        <p>907770035</p>
                        <p>485976756</p>
                        <p>2 ta</p>
                    </div>
                </div>

            </div>
            <div className={styles['teacher-profile-buttons']}>
                <button style={{backgroundColor:'#EF476F'}}>4,154,500</button>
                <button>Oylik berish</button>
            </div>
        </div>
    )
}
