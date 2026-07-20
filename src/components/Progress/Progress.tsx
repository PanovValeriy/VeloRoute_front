import styles from "./Progress.module.css";
import cn from "classnames"

interface IProps {
  className?: string;
  value: number;
}

export default function Progress({className, value}: IProps) {
  const cnProgress = cn(styles.progress, className);

  //const el1 = document.getElementsByClassName(styles.valueOn)
  // document.getElementsByClassName(styles.valueOff).style.width = `${100-value}%`

  return (
    <div className={cnProgress}>
      <div className={styles.valueOn} style={{width: `${value}%`}}></div>
      <div className={styles.valueOff} style={{width: `${100-value}%`}}></div>
    </div>
  )
}