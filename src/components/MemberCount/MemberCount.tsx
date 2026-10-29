import styles from "./MemberCount.module.css"
import cn from "classnames"
import Icon from "../Icon/Icon";

interface IProps {
  className?: string;
  count: number;
  selected?: boolean;
}

export default function MemberCount({ className, count, selected=false }: IProps) {
  const cnMemberCount = cn(styles.memberCount, className, {[styles.selected]: selected});
  return (
    <div className={cnMemberCount}>
      <Icon className={styles.icon} iconName="member" /><div className={styles.label}>{count || 0}</div>
    </div>
  )
}