import { useState } from "react"
import styles from "./NavBar.module.css"
import { readTheme, toggleTheme } from "../../libs/libs"
import IItem from "../../types/types"
import Logo from "../Logo/Logo"
import { Link } from "react-router"
import Menu from "../Menu/Menu"
import FirstEvent from "../FirstEvent/FirstEvent"
import { dataEventList } from "../../store/data/events"
import Icon from "../Icon/Icon"

export default function NavBar() {

  const [theme, setTheme] = useState(readTheme())

  const menuItems: IItem[] = [
    {name: "Главная", url: '/', selected: false},
    {name: "Маршруты", url: '/routes', selected: true},
    {name: "Отчеты", url: '/reports', selected: false},
    {name: "События", url: '/events', selected: false},
  ]

  function handleToggleTheme() {
    toggleTheme()
    setTheme(readTheme())
  }

  return (
    <>
      <div className={styles.navBar}>
        <Link to={"/"} className={styles.logoLink}><Logo className={styles.logo}/></Link>
        {/* <div className={styles.title}>
          Велосипедные маршруты Смоленской области
        </div> */}
        <Menu items={menuItems}/>
				<div className={styles.right}>
					<FirstEvent event={dataEventList[0]}/>
					<div className={styles.theme} onClick={handleToggleTheme}>
						<Icon iconName={ theme === 0 ? "sun" : "moon" } className={styles.iconTheme} />
					</div>
				</div>
      </div>
    </>
  )
}