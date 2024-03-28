import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function TeacherPage() {
  const { teacherId } = useParams();
  const [teacherData, setTeacherData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}/teachers/${teacherId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch teacher data");
        }
        const data = await response.json();
        setTeacherData(data);
      } catch (error) {
        console.error("Error fetching teacher data:", error);
      }
    };

    fetchTeacherData();
  }, [teacherId]);

  const handleGroupClick = (teacherId, groupId) => {
    navigate(`/teachers/${teacherId}/${groupId}`);
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "20px" }}>
      <div style={{ marginLeft: "20px" }}>
        <h1>Teacher Details</h1>
        {teacherData ? (
          <div style={{ border: "1px solid #ccc", padding: "10px", maxWidth: "400px" }}>
            <h2 style={{ color: "blue" }}>Teacher ID: {teacherId}</h2>
            <h3 style={{ color: "green" }}>Teacher Name: {teacherData.name} {teacherData.surname}</h3>
            <h3 style={{ color: "green" }}>Groups:</h3>
            {teacherData.groups.map((group, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <h4 style={{ color: "purple", fontSize: "20px", cursor: "pointer" }} onClick={() => handleGroupClick(teacherId, group.id)}>
                  {group.name}
                </h4>
                <p>Number of Students: {group.students.length}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
