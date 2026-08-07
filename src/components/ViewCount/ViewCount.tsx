import styles from "./ViewCount.module.css"
import cn from "classnames"
import Icon from "../Icon/Icon";

interface IProps {
  className?: string;
  count: number;
}

export default function ViewCount({className, count}: IProps) {
  const cnViewCount = cn(styles.viewCount, className)

  return (

    <div className={cnViewCount}>
      <Icon className={styles.icon} iconName="views" /><div className={styles.label}>{count}</div>
    </div>
  )
}