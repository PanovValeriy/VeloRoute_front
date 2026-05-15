import styles from './Header.module.css'
import {readTheme, THEME_LABELS, toggleTheme} from "../../libs/libs";
import {useState} from "react";
import {Link} from "react-router-dom";
import Logo from "../Logo/Logo";
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

export default function Header() {

  const [theme, setTheme] = useState(readTheme())

  function handleToggleTheme() {
    toggleTheme()
    setTheme(readTheme())
  }

  return (
    <>
      <div className={styles.header}>
        <Link to={"/"} className={styles.logo}><Logo /></Link>
        <div className={styles.title}>
          Велосипедные маршруты Смоленской области
        </div>
        <div className={styles.theme}>
            <Button onClick={handleToggleTheme}>
              <Icon iconName={ theme === 0 ? "sun" : "moon" } className={styles.iconTheme} />{THEME_LABELS[theme]}
            </Button>
        </div>
      </div>
    </>
  )
}