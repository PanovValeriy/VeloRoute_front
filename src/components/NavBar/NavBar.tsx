import styles from "./NavBar.module.css"
import cn from "classnames"
import {useState} from "react"
import { readTheme, toggleTheme } from "../../libs/libs"
import Logo from "../Logo/Logo"
import {Link} from "react-router"
import Menu from "../Menu/Menu"
import FirstEvent from "../FirstEvent/FirstEvent"
import Icon from "../Icon/Icon"

interface IProps {
  className?: string,
}

export default function NavBar({className}: IProps) {
  const cnNavBar = cn(styles.navBar, className)

  const [theme, setTheme] = useState(readTheme())

  function handleToggleTheme() {
    toggleTheme()
    setTheme(readTheme())
  }

  return (
    <div className={cnNavBar}>
      <Link to={"/"} className={styles.logoLink}><Logo className={styles.logo}/></Link>
      <Menu className={styles.menu} mobile={false}/>
      <div className={styles.rightBlock}>
        <FirstEvent />
        <div className={styles.theme} onClick={handleToggleTheme}>
          <Icon className={styles.iconTheme} iconName={ theme === 0 ? "sun" : "moon" } />
        </div>
      </div>
    </div>
  )
}