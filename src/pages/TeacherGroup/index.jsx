import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./index.module.css";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
function TeacherGroup() {
  const navigate = useNavigate();
  const { teacherId } = useParams();
  const [teacher, setTeacher] = useState({});
  const [teacherGroups, setTeacherGroups] = useState(0);
  useEffect(() => {
    if (!teacherId) {
      navigate("/");
    }
    fetch(`${import.meta.env.VITE_API}/teachers/${teacherId}`)
      .then((response) => response.json())
      .then((data) => {
        setTeacher(data);
        setTeacherGroups(data.groups.length);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, [teacherId, navigate]);

  return (
    <div className={styles.teacherInfoWrapper}>
      <div className={styles.teacherInfo}>
        <h3>Ismi: {teacher.name}</h3>
        <h3>Familyasi: {teacher.surname}</h3>
        <h3>Id: {teacher.id}</h3>
        <h3>Yoshi: {teacher.age}</h3>
      </div>
      <p
        style={{
          cursor: "pointer",
          marginBottom: "15px",
          color: "red",
          fontWeight: "900",
        }}
        onClick={() => {
          navigate(-1)
        }}
      >
        Go back
      </p>
      <h3 style={{ marginBottom: "15px" }}>Guruhlari({teacherGroups})</h3>
      <table className={styles.teacherGroups}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Guruh nomi</th>
            <th>o&apos;quvchilar</th>
            <th>Amallar</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {teacher &&
            teacher.groups &&
            teacher.groups.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{el.id}</td>
                  <td onClick={() => {
                    navigate(`/teachers/${teacherId}/${el.id}`)
                  }}>{el.name}</td>
                  <td>{el.students.length}</td>
                  <td>
                    <div className={styles.actionsWrapper}>
                      <img src={editIcon} width={30} alt="Edit button" />
                      <img src={deleteIcon} width={30} alt="delete button" />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherGroup;
