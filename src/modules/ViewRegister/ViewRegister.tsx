import Register from "../../components/Register/Register";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";
import {useEffect} from "react";

export default function ViewRegister() {

  const navigate = useNavigate();
  const {isAuthenticated} = useAuth()

  function handleClickOk() {
    navigate(-1);
  }

  function handleClickCancel() {
    navigate(-1);
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate(-1)
    }
  }, [isAuthenticated, navigate])



  return (
      <Register onClickOk={handleClickOk} onClickCancel={handleClickCancel}/>
  )
}