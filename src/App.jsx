import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import AdminDashboard from "./AdminDashboard";
import TeacherOffice from "./TeacherOffice";
import StudentOffice from "./StudentOffice";
import ErrorPage from "./error";
import { isAuthenticated, role } from "./auth";
import "./App.css";
import { useEffect } from "react";

function ProtectedRoute({ children, allowedRoles }) {
  const navigate = useNavigate();

  if (!isAuthenticated) return navigate("/login");
  if (!allowedRoles.includes(role)) return navigate("/unauthorized");

  return children;
}

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  });
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <ProtectedRoute
        allowedRoles={["admin"]}
        path="/admin"
        element={<AdminDashboard />}
      />
      <ProtectedRoute
        allowedRoles={["admin"]}
        path="/teachers"
        element={<AdminDashboard />}
      />
      <ProtectedRoute
        allowedRoles={["admin"]}
        path="/teachers/:teacher"
        element={<AdminDashboard />}
      />
      <ProtectedRoute
        allowedRoles={["admin"]}
        path="/teachers/:teacher/:group"
        element={<AdminDashboard />}
      />
      <ProtectedRoute
        allowedRoles={["teacher", "student"]}
        path="/teacher"
        element={<TeacherOffice />}
      />
      <ProtectedRoute
        allowedRoles={["teacher", "student"]}
        path="/teacher/:group"
        element={<TeacherOffice />}
      />
      <ProtectedRoute
        allowedRoles={["student"]}
        path="/student"
        element={<StudentOffice />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
