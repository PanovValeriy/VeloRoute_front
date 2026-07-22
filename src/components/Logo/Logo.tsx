import cn from "classnames";
import styles from "./Logo.module.css";
import {ReactComponent as SvgLogo} from "./icons/logo.svg";

interface IProps {
  className?: string;
}

export default function Logo({className}: IProps) {

  const cnLogo = cn(styles.logo, className)
  
  return (
    <div className={cnLogo}>
      <SvgLogo className={styles.svgLogo}/>
    </div>
  )
}