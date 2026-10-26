import styles from "./ButtonProfile.module.css"
import cn from "classnames"
import Icon from "../Icon/Icon";
import {useState} from "react";
import {useAuth} from "../../context/AuthContext";
import Login, {ILoginValues} from "../Login/Login";

interface IProps {
  className?: string,
}

export default function ButtonProfile({className}: IProps) {
  const {user, isAuthenticated, login: getLogin, logout: getLogout, isLoading: isLoadingLogin} = useAuth()
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const cnButtonProfile = cn(styles.buttonProfile, className);

  function handleClickLogin() {
    if (!isAuthenticated) {
      setShowLogin(true);
    } else {
      getLogout()
    }
  }

  const handleLoginOk = async (data: ILoginValues) => {
    setError('')
    try {
      await getLogin(data.login, data.password)
      setShowLogin(false)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Неверный логин или пароль'
      setError(message)
    }
  }

  function handleLoginCancel() {
    setShowLogin(false)
  }

  return (
    <>
      <div className={cnButtonProfile} onClick={handleClickLogin}>
        <Icon className={isAuthenticated ? styles.buttonProfileIconAuth : styles.buttonProfileIcon} iconName={"user"} />
        {isAuthenticated ? <div className={styles.buttonProfileName}>{user?.nickName}</div> : null}
        <div className={styles.buttonProfileCaption}>{isLoadingLogin ? 'Вход...' : !isAuthenticated ? 'Войти' : 'Выйти'}</div>
      </div>
      {(showLogin) ? <Login error={error} onLogin={handleLoginOk} onCancelLogin={handleLoginCancel}/> : null}
    </>
  )
}