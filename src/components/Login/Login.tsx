import  styles from "./Login.module.css"
import cn from "classnames"
import Button from "../Button/Button";
import {Link} from "react-router-dom";
import {useState} from "react";

export interface ILoginValues {
  login: string;
  password: string;
}

interface ILoginProps {
  className?: string;
  error?: string;
  onLogin: (data: ILoginValues) => void;
  onCancelLogin: () => void;
}


export default function Login({ className, error, onLogin, onCancelLogin }: ILoginProps) {

  const cnLogin = cn(styles.login, className);
  const [loginValue, setLoginValue] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')

  function handleLogin() {
    onLogin({login: loginValue, password: passwordValue})
  }
  return (
    <div className={styles.back}>
      <div className={cnLogin}>
        <div className={styles.caption}>Вход</div>
        <input type="text" className={styles.input} name={'login'} placeholder={"Введите логин"} value={loginValue} required onChange={e => setLoginValue(e.target.value)} />
        <input type="password" className={styles.input} name={'password'} placeholder={"Введите пароль"} value={passwordValue} required onChange={e => setPasswordValue(e.target.value)} />
        {!!error ? <div className={styles.error}>{error}</div> : null}
        <Button className={styles.buttonOk} onClick={handleLogin}>Войти</Button>
        <Button className={styles.buttonCancel} onClick={onCancelLogin}>Отмена</Button>
        <div className={styles.register}>Нет аккаунта <Link className={styles.registerLink} to={"#"}>Зарегистрироваться</Link></div>
      </div>
    </div>
  )
}