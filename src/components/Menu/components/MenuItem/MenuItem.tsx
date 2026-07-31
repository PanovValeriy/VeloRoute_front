import styles from "./MenuItem.module.css"
import cn from "classnames"
import IItem from "../../../../types/types"
import {Link} from "react-router-dom";

interface IProps {
  className?: String;
  selected?: boolean;
  item: IItem;
  setSelected: Function;
}

export default function MenuItem({className, item, setSelected}: IProps) {
  
const cnMenuItem = cn(styles.menuItem, className, {[styles.menuItemSelected]: item.selected})

  return (
    <Link className={cnMenuItem} to={item.url} onClick={() => setSelected()}>
      {item.name}
    </Link>
  )
}