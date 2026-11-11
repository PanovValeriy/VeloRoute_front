import styles from './ChangePassword.module.css'
import cn from 'classnames'
import Icon from "../Icon/Icon";
import {useEffect, useState} from "react";
import Button from "../Button/Button";
import {IResultChangePassword, useAuth} from "../../context/AuthContext";

interface IProps {
  className?: string;
  onChangePasswordOk?: () => void;
}

export default function ChangePassword({className, onChangePasswordOk}: IProps) {
  const [passwordOld, setPasswordOld] = useState<string>('')
  const [passwordNew, setPasswordNew] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const [detail, setDetail] = useState<IResultChangePassword>({error: false, detail: ''})
  const {isLoading, changePassword, resultChangePassword} = useAuth()

  function handleChangePassword(): void {
    if (passwordOld === '' || passwordNew === '' || passwordConfirm === '') {
      setDetail({error: true, detail: 'Пароль не может быть пустым'})
      return
    }
    if (passwordNew !== passwordConfirm && passwordNew !== passwordConfirm) {
      setDetail({error: true, detail: 'Пароли не совпадают'})
      return
    }
    changePassword({passwordOld, passwordNew})
  }

  const cnChangePassword = cn(styles.changePassword, className)

  useEffect(() => {
    if (isLoading) {
      setDetail({error: false, detail: 'Происходит смена пароля ...'})
    } else {
      setDetail(resultChangePassword)
      if (!detail.error && detail.detail && onChangePasswordOk) {
        onChangePasswordOk()
      }
    }
  }, [isLoading, resultChangePassword])

  const cnMessage = cn(styles.message, {[styles.error]: detail.error, [styles.success]: !detail.error})
  return (
    <div className={cnChangePassword}>
      <div className={styles.title}>Смена пароля</div>
      <div className={styles.field}>
        <Icon className={styles.fieldIcon} iconName={'password'} />
        <input className={styles.fieldInput} type="password" value={passwordOld} onChange={(e) => setPasswordOld(e.target.value)} />
      </div>
      <div className={styles.field}>
        <Icon className={styles.fieldIcon} iconName={'password'} />
        <input className={styles.fieldInput} type="password" value={passwordNew} onChange={(e) => setPasswordNew(e.target.value)} />
      </div>
      <div className={styles.field}>
        <Icon className={styles.fieldIcon} iconName={'password'} />
        <input className={styles.fieldInput} type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
      </div>
      {(detail.detail) ? <div className={cnMessage}>{detail.detail}</div> : null}
      <Button className={styles.button} onClick={handleChangePassword}>Сменить пароль</Button>
    </div>
  )
}