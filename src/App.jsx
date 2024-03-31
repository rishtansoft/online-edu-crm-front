
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import LoginPage from "./pages/login";
// import HomePage from "./pages/home";
import ErrorPage from "./pages/errorPage";
import TeachersPage from "./pages/teachers";
import TeacherPage from "./pages/teacher";
import StudentPage from "./pages/student";
import Group from "./pages/group";
import { useSelector } from "react-redux";
import StudentsPage from "./pages/studends";
function App() {
  const token = useSelector((state) => state.userToken.token);
  const role = useSelector((state) => state.userToken.role);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  function ProtectedRoute({
    children,
    redirectTo = "/login",
    isAuthentication,
  }) {
    useEffect(() => {
      if (!isAuthentication) {
        return navigate(redirectTo);
      }
    }, [isAuthentication, navigate, redirectTo]);

    return children;
  }

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {token !== null && role === "admin" && (
          <>
            <Route
              path="/"
              element={
                <ProtectedRoute isAuthentication={token ? true : false}>
                  <TeachersPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/teachers"
              element={
                <ProtectedRoute isAuthentication={token ? true : false}>
                  <TeachersPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/teachers/:teacherId"
              element={
                <ProtectedRoute isAuthentication={token ? true : false}>
                  <TeacherPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/teachers/:teacherId/:groupId"
              element={
                <ProtectedRoute isAuthentication={token ? true : false}>
                  <StudentsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/teachers/:teacherId/:groupId/:studentId"
              element={
                <ProtectedRoute isAuthentication={token ? true : false}>
                  <StudentPage />
                </ProtectedRoute>
              }
            />
          </>
        )}
        {token !== null && role === "teacher" && (
          <>
            <Route
              path="/"
              element={
                <ProtectedRoute isAuthentication={token ? true : false}>
                  <TeacherPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/groups/:group"
              element={
                <ProtectedRoute isAuthentication={token ? true : false}>
                  <Group />
                </ProtectedRoute>
              }
            />
          </>
        )}
        {token !== null && role === "student" && (
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthentication={token ? true : false}>
                <StudentPage />
              </ProtectedRoute>
            }
          />
        )}
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </>
  );
}

export default App;
