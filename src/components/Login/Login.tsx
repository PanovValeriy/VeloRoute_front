import  styles from "./Login.module.css"
import cn from "classnames"
import Button from "../Button/Button";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "../../context/AuthContext";

export interface ILoginValues {
  login: string;
  password: string;
}

interface ILoginProps {
  className?: string;
  onLoginOk: () => void;
  onLoginCancel: () => void;
}


export default function Login({ className, onLoginOk, onLoginCancel }: ILoginProps) {

  const {login: getLogin} = useAuth()
  const cnLogin = cn(styles.login, className);
  const [loginValue, setLoginValue] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')
  const [error, setError] = useState<string>('')

  async function handleLogin () {
    setError('')
    try {
      await getLogin(loginValue, passwordValue)
      onLoginOk()
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Неверный логин или пароль'
      setError(message)
    }
  }

  return (
    <div className={styles.back}>
      <div className={cnLogin}>
        <div className={styles.caption}>Вход</div>
        <input type="text" className={styles.input} name={'login'} placeholder={"Введите логин"} value={loginValue} required onChange={e => setLoginValue(e.target.value)} />
        <input type="password" className={styles.input} name={'password'} placeholder={"Введите пароль"} value={passwordValue} required onChange={e => setPasswordValue(e.target.value)} />
        {!!error ? <div className={styles.error}>{error}</div> : null}
        <Button className={styles.buttonOk} onClick={handleLogin}>Войти</Button>
        <Button className={styles.buttonCancel} onClick={onLoginCancel}>Отмена</Button>
        <div className={styles.register}>Нет аккаунта <Link className={styles.registerLink} to={"#"}>Зарегистрироваться</Link></div>
      </div>
    </div>
  )
}