import styles from "./Menu.module.css"
import cn from "classnames"
import MenuItem from "./components/MenuItem/MenuItem";
import IItem from "../../types/types"
import MenuItemMobile from "./components/MenuItemMobile/MenuItemMobile";
import {useEffect, useState} from "react";
import {useLocation} from "react-router";


interface IProps {
  className?: string;
  mobile?: boolean;
}


export default function Menu({className, mobile}:IProps) {
  const {pathname} = useLocation()
  const cnMenu = cn(styles.menu, className)

  const [selected, setSelected] = useState<number>(0)

  const items: IItem[] = [
    {name: "Главная", url: '/', selected: selected === 0, iconName: "home" },
    {name: "Маршруты", url: '/routes', selected: selected === 1, iconName: "route" },
    {name: "Отчеты", url: '/reports', selected: selected === 2, iconName: "report" },
    {name: "События", url: '/events', selected: selected === 3, iconName: "calendar" },
  ]

  useEffect(()=> {

    if (pathname.includes('route')) {
      setSelected(1)
    } else if (pathname.includes('report')) {
      setSelected(2)
    } else if (pathname.includes('event')) {
      setSelected(3)
    } else setSelected(0)

  }, [pathname])


  return (
    <div className={cnMenu}>
      {(!mobile)
        ? (
          <div className={styles.menuWrapper}>
            {items.map((item, idx) => <MenuItem key={idx} item={item} setSelected={() => setSelected(idx)}/>)}
          </div>
        )
        : (
          <div className={styles.menuWrapper}>
            {items.map((item, idx) => <MenuItemMobile key={idx} item={item} setSelected={() => setSelected(idx)}/>)}
          </div>
        )
      }
    </div>
  )
}