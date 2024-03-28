import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../store/userToken";
import { setRole } from "../../store/userToken";
export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      LoginPage
      <br />
      <br />
      <br />
      <button
        style={{
          width: "400px",
          backgroundColor: "blue",
          color: "white",
          padding: "15px",
          border: "none",
        }}
        onClick={() => {
          const token = "dskadasdkfhsdbhgjldshbkchasdbhksadbhsadjas";
          const role = "admin";
          dispatch(setToken(token));
          dispatch(setRole(role));
          localStorage.setItem("token", token);
          localStorage.setItem("role", role);
          navigate("/");
        }}
      >
        Save LocalStorage
      </button>
    </div>
  );
}
