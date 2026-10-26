import Login from "../../components/Login/Login";
import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function ViewLogin() {

  const navigate = useNavigate();
  const {isAuthenticated} = useAuth()

  function handleLoginOk() {
    navigate(-1);
  }

  function handleLoginCancel() {
    navigate(-1);
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate(-1)
    }
  }, [isAuthenticated, navigate])

  return (
    <Login onLoginOk={handleLoginOk} onLoginCancel={handleLoginCancel} />
  )
}