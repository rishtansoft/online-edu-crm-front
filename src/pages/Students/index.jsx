import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./index.module.css";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";

function TeacherGroupStudents() {
  const navigate = useNavigate();
  const { teacherId, groupId } = useParams();
  const [selectedGroup, setSelectedGroup] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API + "/teachers/" + `${teacherId}`
        );
        const data = await response.json();
        data.groups.map((el) => {
          if (el.id == groupId) {
            setSelectedGroup(el);
          }
          return el;
        });
        setLoading(false);
      } catch (error) {
        console.error("Xatolik:", error);
      }
    };

    fetchData();
  }, [teacherId, groupId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.teacherInfoWrapper}>
      <p
        style={{
          cursor: "pointer",
          marginBottom: "15px",
          color: "red",
          fontWeight: "900",
        }}
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </p>
      <h3 style={{ marginBottom: "15px" }}>
        O&apos;quvchilar soni({selectedGroup.students.length})
      </h3>
      <table className={styles.teacherGroups}>
        <thead>
          <tr>
            <th>Id</th>
            <th>F.I.Sh</th>
            <th>Yoshi</th>
            <th>Amallar</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {selectedGroup.students.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name + " " + student.surname}</td>
              <td>{student.age}</td>
              <td>
                <div className={styles.actionsWrapper}>
                  <img src={editIcon} width={30} alt="Edit button" />
                  <img src={deleteIcon} width={30} alt="delete button" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherGroupStudents;
