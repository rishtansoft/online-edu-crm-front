import React, { useEffect, useState } from 'react'
import natifacation from '../../assets/ntfc.svg'
import teacherphoto from '../../assets/Ellipse.png'
import btnsvg from '../../assets/btn.svg'
import search from '../../assets/teacher-search.svg';
import styles from '../../styles/style.module.css';

export default function Header() {
    const [pathname, setPathname] = useState('');

    useEffect(() => {
        setPathname(window.location.pathname);
        console.log(16, pathname);
    }, []);

    return (
        <div>
            <header className={styles['teacher-header']}>
                <div className={styles['teacher-header-left']}>
                    {
                        pathname.includes("/group") ? 
                            (
                            <>
                                <h1>Guruhlar</h1>
                                <p>Guruhlarni ko‘rishingiz mumkin</p>
                            </>

                        ) : (
                            <>
                                <h1>Assalomu alaykum, helo <span>👋</span></h1>
                                <p>Kabinetingizga xush kelibsiz!</p>
                            </>
                        )
                    }

                </div>
                <div className={styles['teacher-header-right']}>
                    <div className={styles['header-search']}>
                        <input type="search" placeholder='Qidiruv o‘quvchilar, guruhlar va boshqa...' id="header-search" />
                        <img src={search} alt="search-pic" />
                    </div>
                    <img src={natifacation} alt="natification-pic" />
                    <div className={styles['teacher-profile']}>
                        <img src={teacherphoto} alt="teacher-photo" />
                        <div className={styles['header-teacher-about']}>
                            <h1>Sarvarbek</h1>
                            <p>CEO</p>
                        </div>
                        <img width={18} height={18} src={btnsvg} alt="buttonsvg" />
                    </div>
                </div>
            </header>
        </div>
    )
}
