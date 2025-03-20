import styles from './Header.module.css'
import Logo from "../Logo/Logo";
import {readTheme, THEME_LABELS, toggleTheme} from "../../libs/libs";
import {useState} from "react";

export default function Header() {

  const [theme, setTheme] = useState(readTheme())

  function handleToggleTheme() {
    toggleTheme()
    setTheme(readTheme())
  }

  return (
    <>
      <div className={styles.header}>
        <Logo />
        <div className={styles.title}>
          Велосипедные маршруты Смоленской области
        </div>
      </div>
      <div className={styles.theme}>Тема:&nbsp;&nbsp;<button className={styles.button} onClick={handleToggleTheme}>{THEME_LABELS[theme]}</button></div>
    </>
  )
}