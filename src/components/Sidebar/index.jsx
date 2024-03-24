import React from 'react'
import logo from '../../assets/logo.png'
import icons from '../../assets/icons.svg'
import styles from '../../styles/style.module.css';
import table from '../../assets/table.svg'
import group from '../../assets/groups.svg'
import xodim from '../../assets/xodim.svg'
import people from '../../assets/people.svg'
import pay from '../../assets/pay.svg'
import debtors from '../../assets/debtors.svg'
import reports from '../../assets/reports.svg'
import addition from '../../assets/addition.svg'

export default function Sidebar() {

    return (
        <div>
            <div className={styles['teacher-menus']}>
                <div>
                    <div className={styles['teacher-logo']}>
                        <img src={logo} alt="logo" />
                        <p>Learning center</p>
                    </div>

                    <div className={styles['teacher-menu']}>
                        <div className={styles['teacher-component']}>
                            <img src={icons} alt="icon" />
                            <p>Lidlar</p>
                        </div>
                        <div className={styles['teacher-component']}>
                            <img src={table} alt="table" />
                            <p>Dars jadvali</p>
                        </div>
                        <div className={styles['teacher-component']}>
                            <img src={group} alt="group" />
                            <p>Guruhlar</p>
                        </div>
                        <div className={styles['teacher-component']}>
                            <img src={xodim} alt="xodim" />
                            <p>Xodimlar</p>
                        </div>
                        <div className={styles['teacher-component']}>
                            <img src={people} alt="people" />
                            <p>O‘quvchilar</p>
                        </div>
                        <div className={styles['teacher-component']}>
                            <img src={pay} alt="payments" />
                            <p>To‘lovlar</p>
                        </div>
                        <div className={styles['teacher-component']}>
                            <img src={debtors} alt="debtors" />
                            <p>Qarzdorlar</p>
                        </div>
                        <div className={styles['teacher-component']}>
                            <img src={reports} alt="reports" />
                            <p>Hisobotlar</p>
                        </div>
                        <div className={styles['teacher-component']}>
                            <img src={addition} alt="addition" />
                            <p>Qo‘shimcha</p>
                        </div>
                    </div>
                </div>
                <div className={styles['hr-menus']}></div>
            </div>
        </div>
    )
}
