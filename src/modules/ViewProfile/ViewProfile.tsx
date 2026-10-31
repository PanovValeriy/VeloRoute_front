import styles from './ViewProfile.module.css'
import Profile from "../../components/Profile/Profile";
import ChangePassword from "../../components/ChangePassword/ChangePassword";
import {useAuth} from "../../context/AuthContext";
import {Navigate} from "react-router";

export default function ViewProfile() {
  const {user} = useAuth()

  if (!user) {
    return (
      <Navigate to="/login" />
    )
  }

  return (
    <div className={styles.viewProfile}>
      <div className={styles.title}>Профиль</div>
      <div className={styles.group}>
        <Profile user={user}/>
        <ChangePassword />
      </div>
    </div>
  )
}