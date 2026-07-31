import styles from "./MenuMobile.module.css"
import cn from "classnames"
import Menu from "../../../Menu/Menu";

interface IProps {
  className?: string
}

export default function MenuMobile({className}: IProps) {
  const cnMenuMobile = cn(styles.menuMobile, className)

  return (
    <div className={cnMenuMobile}>
      <Menu mobile={true} />
    </div>
  )
}