import { Routes, Route, useNavigate } from "react-router-dom";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import TeacherMainPage from "./pages/TeacherMainPage";
import StudentMainPage from "./pages/StudentMainPage";
import ErrorPage from "./pages/ErrorPage";

import { useEffect } from "react";
import "./App.css";

function ProtectedRoute({ children, allowedRoles }) {
  const role = 'admin';
  const isAuthenticated = true;
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
        element={<TeacherMainPage />}
      />
      <ProtectedRoute
        allowedRoles={["teacher", "student"]}
        path="/teacher/:group"
        element={<TeacherMainPage />}
      />
      <ProtectedRoute
        allowedRoles={["student"]}
        path="/student"
        element={<StudentMainPage />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
