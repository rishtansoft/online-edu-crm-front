import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function GroupPage() {
  const { teacherId, groupId } = useParams();
  const [students, setStudents] = useState([]);
  const [teacherName, setTeacherName] = useState("");
  const [groupName, setGroupName] = useState("");

  useEffect(() => {
    const fetchTeacherAndGroup = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}/teachers`);
        if (!response.ok) {
          throw new Error("Failed to fetch teachers data");
        }
        const teachersData = await response.json();
        const teacher = teachersData.find(
          (teacher) => teacher.id == parseInt(teacherId)
        );
        if (!teacher) {
          throw new Error("Teacher not found");
        }
        setTeacherName(`${teacher.name} ${teacher.surname}`);

        const group = teacher.groups.find(
          (group) => group.id === parseInt(groupId)
        );
        if (!group) {
          throw new Error("Group not found");
        }
        setGroupName(group.name);
        setStudents(group.students);
      } catch (error) {
        console.error("Error fetching teacher and group data:", error);
      }
    };

    fetchTeacherAndGroup();
  }, [teacherId, groupId]);

  return (
    <div>
      <h1>Group Page</h1>
      <h2>Teacher: {teacherName}</h2>
      <h2>Group: {groupName}</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Student Name
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Surname
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Age</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {student.name}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {student.surname}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {student.age}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
