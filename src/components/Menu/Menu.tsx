import classNames from "classnames";
import styles from "./Menu.module.css"
import cn from "classnames"
import MenuItem from "./MenuItem/MenuItem";
import IItem from "../../types/types"


interface IProps {
  className?: string;
  items: IItem[];
  setSelected: Function;
}


export default function Menu({className, items, setSelected}:IProps) {

  const cnMenu = cn(styles.menu, className)

  return (
    <div className={cnMenu}>
      {items.map((item, idx) => <MenuItem item={item} setSelected={() => setSelected(idx)}/>)}
    </div>
  )
}