import Teachers from "../../components/CreateTeacher/Teachers";
import ModalCreateTeacher from "../../components/Modal/Modal";
import "./Admin.css";

// fake teacher

const teacers = [
  {
    id: 1,
    name: "Leanne Graham",
    role: "O'qtuvchi",
    maosh: "3 437 668 so‘m",
    phone: "770-736-8031",
    website: "13.08.2000",
  },
  {
    id: 2,
    name: "Ervin Howell",
    role: "O'qtuvchi",
    maosh: "3 437 668 so‘m",
    phone: "770-736-8031",
    website: "13.08.2000",
  },
  {
    id: 1,
    name: "Leanne Graham",
    role: "O'qtuvchi",
    maosh: "3 437 668 so‘m",
    phone: "770-736-8031",
    website: "13.08.2000",
  },
  {
    id: 2,
    name: "Ervin Howell",
    role: "O'qtuvchi",
    maosh: "3 437 668 so‘m",
    phone: "770-736-8031",
    website: "13.08.2000",
  },
  {
    id: 1,
    name: "Leanne Graham",
    role: "O'qtuvchi",
    maosh: "3 437 668 so‘m",
    phone: "770-736-8031",
    website: "13.08.2000",
  },
  {
    id: 2,
    name: "Ervin Howell",
    role: "O'qtuvchi",
    maosh: "3 437 668 so‘m",
    phone: "770-736-8031",
    website: "13.08.2000",
  },
  {
    id: 1,
    name: "Leanne Graham",
    role: "O'qtuvchi",
    maosh: "3 437 668 so‘m",
    phone: "770-736-8031",
    website: "13.08.2000",
  },
  {
    id: 2,
    name: "Ervin Howell",
    role: "O'qtuvchi",
    maosh: "3 437 668 so‘m",
    phone: "770-736-8031",
    website: "13.08.2000",
  },
  {
    id: 1,
    name: "Leanne Graham",
    role: "O'qtuvchi",
    maosh: "3 437 668 so‘m",
    phone: "770-736-8031",
    website: "13.08.2000",
  },
  {
    id: 2,
    name: "Ervin Howell",
    role: "O'qtuvchi",
    maosh: "3 437 668 so‘m",
    phone: "770-736-8031",
    website: "13.08.2000",
  },
  {
    id: 1,
    name: "Leanne Graham",
    role: "O'qtuvchi",
    maosh: "3 437 668 so‘m",
    phone: "770-736-8031",
    website: "13.08.2000",
  },
  {
    id: 2,
    name: "Ervin Howell",
    role: "O'qtuvchi",
    maosh: "3 437 668 so‘m",
    phone: "770-736-8031",
    website: "13.08.2000",
  },
];

function Admin() {
  return (
    <div className="AdminWrapper">
      <div className="AdminWrapper-header">
        <h2>O'qtuvchilar</h2>
        <ModalCreateTeacher />
      </div>
      {/* O'qtuvchilar componentasi chaqiriladi  */}
      <Teachers teacher={teacers} />
    </div>
  );
}

export default Admin;
