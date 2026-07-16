import styles from './Header.module.css'
import cn from "classnames"
import {readTheme, toggleTheme} from "../../libs/libs";
import {useState} from "react";
import IItem from '../../types/types';
import NavBar from '../NavBar/NavBar';
import Title from "./components/Title/Title";

interface IProps {
  mainPage?: boolean;
}

export default function Header({mainPage}: IProps) {
  const cnHeader = cn(styles.header, {[styles.headerBackground]: mainPage})
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
      <div className={cnHeader}>
        <NavBar />
        {mainPage ? <Title /> : null }
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