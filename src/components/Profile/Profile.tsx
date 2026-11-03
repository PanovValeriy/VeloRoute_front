import styles from './Profile.module.css'
import cn from 'classnames'
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import {IUserData} from "../../api/auth";
import {useAuth} from "../../context/AuthContext";

interface IProps {
  className?: string;
  user: IUserData;
}

export default function Profile({className, user}: IProps) {
  const {logout} = useAuth()
  const cnProfile = cn(styles.profile, className)
  return (
    <div className={cnProfile}>
      <div className={styles.titleLine}>
        <div className={styles.title}>Личные данные</div>
        <Button className={styles.buttonLogout} onClick={logout}>Выйти</Button>
      </div>
      <div className={styles.userLine}>
        <Icon className={styles.userAvatar} iconName={'user'} />
        <div className={styles.userNameGroup}>
          <div className={styles.userName}>{user.firstName} {user.lastName}</div>
          <div className={styles.userLogin}>@{user.login}</div>
        </div>
      </div>
      <div className={styles.item}>
        <Icon className={styles.itemIcon} iconName={'name'} />
        <div className={styles.itemName}>Логин</div>
        <div className={styles.itemValue}>{user.login}</div>
      </div>
      <div className={styles.item}>
        <Icon className={styles.itemIcon} iconName={'name'} />
        <div className={styles.itemName}>Фамилия</div>
        <div className={styles.itemValue}>{user.lastName}</div>
      </div>
      <div className={styles.item}>
        <Icon className={styles.itemIcon} iconName={'name'} />
        <div className={styles.itemName}>Имя</div>
        <div className={styles.itemValue}>{user.firstName}</div>
      </div>
      <div className={styles.item}>
        <Icon className={styles.itemIcon} iconName={'nickname'} />
        <div className={styles.itemName}>Ник</div>
        <div className={styles.itemValue}>{user.nickName}</div>
      </div>
    </div>
  )
}