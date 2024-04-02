import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API}/teachers` // .env faylidagi o'zgaruvchi
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTeachers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTeachers();
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "blue" }}>Teachers</h1>
      <ul>
        {teachers.map((teacher) => (
          <li
            key={teacher.id}
            style={{
              marginBottom: "20px",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            <h2
              style={{ textAlign: "center", color: "red", cursor: "pointer" }}
              onClick={() => {
                navigate(`/teachers/${teacher.id}`);
              }}
            >
              {teacher.name} {teacher.surname}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
