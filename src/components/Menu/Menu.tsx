import classNames from "classnames";
import styles from "./Menu.module.css"
import cn from "classnames"
import MenuItem from "./MenuItem/MenuItem";
import IItem from "../../types/types"


interface IProps {
  className?: string;
  items: IItem[];
}


export default function Menu({className, items}:IProps) {

  const cnMenu = cn(styles.menu, className)

  return (
    <div className={styles.menu}>
      {items.map((item) => <MenuItem item={item}/>)}
    </div>
  )
}