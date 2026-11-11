import ChangePassword from '../../components/ChangePassword/ChangePassword'
import { useAuth } from '../../context/AuthContext';
import styles from './ViewChangePassword.module.css'
import {Navigate, useNavigate} from "react-router";
export default function ViewChangePassword() {
  const {user, logout} = useAuth()
  const navigate = useNavigate()

  if (user && user.status !== 0 ) {
    logout()
  }

  if (!user) {
    return (
      <Navigate to="/login" />
    )
  }

  function handleChangePasswordOk() {
    navigate(-1)
  }

  return (
    <div className={styles.viewChangePassword}>
      <div className={styles.title}>Смена пароля</div>
      <ChangePassword onChangePasswordOk={handleChangePasswordOk}/>
    </div>
  )
}