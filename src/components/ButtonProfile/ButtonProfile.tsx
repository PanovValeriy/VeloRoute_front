import styles from "./ButtonProfile.module.css"
import cn from "classnames"
import Icon from "../Icon/Icon";
import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

interface IProps {
  className?: string,
}

export default function ButtonProfile({className}: IProps) {
  const {user, isAuthenticated, isLoading: isLoadingLogin} = useAuth()
  const navigate = useNavigate();

  const cnButtonProfile = cn(styles.buttonProfile, className);

  function handleClickLogin() {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate("/profile")
    }
  }

  const cnButtonProfileIcon = cn(styles.buttonProfileIcon, {[styles.auth]: isAuthenticated});

  return (
    <div className={cnButtonProfile} onClick={handleClickLogin}>
        <Icon className={cnButtonProfileIcon} iconName={"user"} />
      <div className={styles.buttonProfileCaption}>{isLoadingLogin ? 'Вход...' : !isAuthenticated ? 'Войти' : user?.nickName}</div>
    </div>
  )
}