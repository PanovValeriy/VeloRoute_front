import styles from './ViewsCount.module.css'
import cn from "classnames"

interface IProps {
  className?: string;
  viewsCount: number;
}

export default function ViewsCount({className, viewsCount}: IProps) {
  const cnViewCount = cn(styles.viewsCount, className)
  return (
    <div className={cnViewCount}>{(viewsCount) ? viewsCount : 0}</div>
  )
}