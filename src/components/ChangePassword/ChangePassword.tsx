import styles from './ChangePassword.module.css'
import cn from 'classnames'
import Icon from "../Icon/Icon";
import {useState} from "react";
import Button from "../Button/Button";

interface IProps {
  className?: string;
}

export default function ChangePassword({className}: IProps) {
  const [passwordOld, setPasswordOld] = useState<string>('')
  const [passwordNew, setPasswordNew] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')

  const cnChangePassword = cn(styles.changePassword, className)

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
      <Button className={styles.button}>Сменить пароль</Button>
    </div>
  )
}