import styles from "./LikeCount.module.css"
import cn from "classnames"
import Icon from "../Icon/Icon";

interface IProps {
  className?: string;
  count: number;
  selected?: boolean;
}

export default function LikeCount({ className, count, selected=false }: IProps) {
  const cnLikeCount = cn(styles.likeCount, className, {[styles.selected]: selected});
  return (
    <div className={cnLikeCount}>
      <Icon className={styles.icon} iconName="like" /><div className={styles.label}>{count}</div>
    </div>
  )
}