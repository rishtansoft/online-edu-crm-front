import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './styles/style.module.css';
import Sidebar from './components/Sidebar';
import Group from './pages/Group';
import Students from './pages/Students';
import Header from './components/Header';
import Teacher from './pages/Teacher';

function App() {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);
    console.log(pathname);
  }, []);

  return (
    <>
      {pathname === "/Teacher" ? ( 
        <Teacher></Teacher>
      ) : ( 
        <div className={styles['teacher']}>
          <Sidebar></Sidebar>
          <div>
            <Header></Header>
            <div className={styles['hr']}></div>

            <Routes>
              <Route path='/group' element={<Group />} />
              <Route path='/students' element={<Students />} />
              {/* <Route path='/Teacher' element={<Teacher />} /> */}
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
