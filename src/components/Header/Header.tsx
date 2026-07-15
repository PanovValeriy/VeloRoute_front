import styles from './Header.module.css'
import {readTheme, THEME_LABELS, toggleTheme} from "../../libs/libs";
import {useState} from "react";
import {Link} from "react-router-dom";
import Logo from "../Logo/Logo";
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Menu from '../Menu/Menu';
import IItem from '../../types/types';
import FirstEvent from '../FirstEvent/FirstEvent';
import { dataEventList } from '../../store/data/events';
import NavBar from '../NavBar/NavBar';

export default function Header() {

  const [theme, setTheme] = useState(readTheme())

  const menuItems: IItem[] = [
    {name: "Главная", url: '', selected: false},
    {name: "Маршруты", url: '', selected: true},
    {name: "Отчеты", url: '', selected: false},
    {name: "События", url: '', selected: false},
  ]

  function handleToggleTheme() {
    toggleTheme()
    setTheme(readTheme())
  }

  return (
    <>
      <div className={styles.header}>
        <NavBar />
        {/* <Link to={"/"} className={styles.logoLink}><Logo className={styles.logo}/></Link>
        {/* <div className={styles.title}>
          Велосипедные маршруты Смоленской области
        </div> */}
        {/* <Menu items={menuItems}/>
        <FirstEvent event={dataEventList[0]}/>
        <div className={styles.theme} onClick={handleToggleTheme}>
          <Icon iconName={ theme === 0 ? "sun" : "moon" } className={styles.iconTheme} />
        </div> */}
      </div>
    </>
  )
}