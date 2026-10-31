import styles from "./ButtonProfile.module.css"
import cn from "classnames"
import Icon from "../Icon/Icon";
import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

interface IProps {
  className?: string,
}

export default function ButtonProfile({className}: IProps) {
  const {user, isAuthenticated, logout: getLogout, isLoading: isLoadingLogin} = useAuth()
  const navigate = useNavigate();

  const cnButtonProfile = cn(styles.buttonProfile, className);

  function handleClickLogin() {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      getLogout()
    }
  }

  return (
    <div className={cnButtonProfile} onClick={handleClickLogin}>
      <Icon className={isAuthenticated ? styles.buttonProfileIconAuth : styles.buttonProfileIcon} iconName={"user"} />
      {isAuthenticated ? <div className={styles.buttonProfileName}>{user?.nickName}</div> : null}
      <div className={styles.buttonProfileCaption}>{isLoadingLogin ? 'Вход...' : !isAuthenticated ? 'Войти' : 'Выйти'}</div>
    </div>
  )
}