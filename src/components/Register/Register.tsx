import styles from './Register.module.css'
import {useEffect, useState} from "react";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import {useRegisterMutation} from "../../store/services/userApi";

interface IProps {
  onClickOk: () => void;
  onClickCancel: () => void;
}

export default function Register({onClickOk, onClickCancel}: IProps) {

  const [loginValue, setLoginValue ] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')
  const [passwordConfirmValue, setPasswordConfirmValue] = useState<string>('')
  const [lastNameValue, setLastNameValue ] = useState<string>('')
  const [firstNameValue, setFirstNameValue ] = useState<string>('')
  const [nickNameValue, setNickNameValue ] = useState<string>('')
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [register, {isLoading, isSuccess, isError, error}] = useRegisterMutation()

  function handleClickOk() {
    if (loginValue.trim() === "") {
      setErrorMsg('Логин не задан')
      return
    }
    if (passwordValue.trim() === "") {
      setErrorMsg('Пароль не задан')
      return
    }
    if (passwordValue !== passwordConfirmValue) {
      setErrorMsg('Пароли не совпадают')
      return
    }
    register({login: loginValue, password: passwordValue, firstName: firstNameValue, lastName: lastNameValue, nickName: nickNameValue})
  }

  useEffect(() => {
    if (!isLoading) {
      if (isSuccess) {
        setErrorMsg('')
        onClickOk()
      }
      if (isError && error && 'data' in error) {
        setErrorMsg(error?.data.detail)
      }
    }
  },[isLoading, isSuccess, isError, error, onClickOk])

  return (
    <div className={styles.register}>
      <div className={styles.caption}>Регистрация</div>
      <div className={styles.field}>
        <Icon className={styles.icon} iconName={'name'} />
        <input className={styles.input} type={'text'} placeholder={'Логин'} value={loginValue} onChange={e => setLoginValue(e.target.value)} />
      </div>
      <div className={styles.field}>
        <Icon className={styles.icon} iconName={'password'} />
        <input className={styles.input} type={'password'} placeholder={'Пароль'} value={passwordValue} onChange={e => setPasswordValue(e.target.value)} />
      </div>
      <div className={styles.field}>
        <Icon className={styles.icon} iconName={'password'} />
        <input className={styles.input} type={'password'} placeholder={'Подтверждение пароля'} value={passwordConfirmValue} onChange={e => setPasswordConfirmValue(e.target.value)} />
      </div>
      <div className={styles.field}>
        <Icon className={styles.icon} iconName={'name'} />
        <input className={styles.input} type={'text'} placeholder={'Фамилия'} value={lastNameValue} onChange={e => setLastNameValue(e.target.value)} />
      </div>
      <div className={styles.field}>
        <Icon className={styles.icon} iconName={'name'} />
        <input className={styles.input} type={'text'} placeholder={'Имя'} value={firstNameValue} onChange={e => setFirstNameValue(e.target.value)} />
      </div>
      <div className={styles.field}>
        <Icon className={styles.icon} iconName={'nickname'} />
        <input className={styles.input} type={'text'} placeholder={'Ник'} value={nickNameValue} onChange={e => setNickNameValue(e.target.value)} />
      </div>
      {!!errorMsg ? <div className={styles.error}>{errorMsg}</div> : null}
      <Button className={styles.buttonOk} onClick={handleClickOk}>Отправить заявку на регистрацию</Button>
      <Button className={styles.buttonCancel} onClick={onClickCancel}>Отмена</Button>
    </div>
  )
}