import { useState } from "react"
import styles from "./NavBar.module.css"
import { readTheme, toggleTheme } from "../../libs/libs"
import IItem from "../../types/types"
import Logo from "../Logo/Logo"
import {Link, useLocation} from "react-router"
import Menu from "../Menu/Menu"
import FirstEvent from "../FirstEvent/FirstEvent"
import Icon from "../Icon/Icon"

export default function NavBar() {

  const [theme, setTheme] = useState(readTheme())
  const {pathname} = useLocation()
  let initialMenu = 0
  if (pathname.includes('route')) {
    initialMenu = 1
  }
  if (pathname.includes('report')) {
    initialMenu = 2
  }
  if (pathname.includes('event')) {
    initialMenu = 3
  }
  const [selected, setSelected] = useState<number>(initialMenu)

  const menuItems: IItem[] = [
    {name: "Главная", url: '/', selected: selected === 0},
    {name: "Маршруты", url: '/routes', selected: selected === 1},
    {name: "Отчеты", url: '/reports', selected: selected === 2},
    {name: "События", url: '/events', selected: selected === 3},
  ]

  function handleToggleTheme() {
    toggleTheme()
    setTheme(readTheme())
  }

  return (
    <div className={styles.navBar}>
      <Link to={"/"} className={styles.logoLink}><Logo className={styles.logo}/></Link>
      <Menu items={menuItems} setSelected={setSelected} />
      <div className={styles.right}>
        <FirstEvent />
        <div className={styles.theme} onClick={handleToggleTheme}>
          <Icon iconName={ theme === 0 ? "sun" : "moon" } className={styles.iconTheme} />
        </div>
      </div>
    </div>
  )
}