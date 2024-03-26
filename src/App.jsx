import './App.css'
import { Routes, Route } from "react-router-dom"
import Teacher from './pages/teacher'
import Group from './pages/group'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Teacher></Teacher>}></Route>
    </Routes>
    <Routes>
      <Route path='/group' element={<Group></Group>}></Route>
    </Routes>
    </>
  )
}

export default App
