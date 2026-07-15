import styles from "./MenuItem.module.css"
import cn from "classnames"
import IItem from "../../../types/types"

interface IProps {
  className?: String;
  selected?: boolean;
  item: IItem;
}

export default function MenuItem({className, item}: IProps) {
  
const cnMenuItem = cn(styles.menuItem, className, {[styles.menuItemSelected]: item.selected})

  return (
    <a className={cnMenuItem} href={item.url}>
      {item.name}
    </a>
  )
}