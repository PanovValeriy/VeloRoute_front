import styles from './Header.module.css'
import {readTheme, THEME_LABELS, toggleTheme} from "../../libs/libs";
import {useState} from "react";
import {Link} from "react-router-dom";
import Logo from "../Logo/Logo";

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
            Тема
            <button className={styles.button} onClick={handleToggleTheme}>{THEME_LABELS[theme]}</button></div>
      </div>
    </>
  )
}