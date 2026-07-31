import styles from "./MenuItemMobile.module.css"
import cn from "classnames"
import Icon from "../../../Icon/Icon";
import IItem from "../../../../types/types";
import {Link} from "react-router-dom";

interface IProps {
  className?: string;
  selected?: boolean;
  item: IItem;
  setSelected: Function;
}

export default function MenuItemMobile({className, selected, item, setSelected}: IProps) {
  const cnMenuItemMobile = cn(styles.menuItemMobile, className, {[styles.selected]: item.selected});
  const cnMenuItemMobileIcon = cn(styles.menuItemMobileIcon, {[styles.selected]: item.selected});
  const cnMenuItemMobileCaption = cn(styles.menuItemMobileCaption, {[styles.selected]: item.selected});

  return (
    <Link className={cnMenuItemMobile} to={item.url} onClick={() => setSelected()}>
      <Icon className={cnMenuItemMobileIcon} iconName={item.iconName || "home"} />
      <div className={cnMenuItemMobileCaption}>{item.name}</div>
    </Link>
  )
}