import styles from './ViewsCount.module.css'

interface IProps {
  viewsCount: number;
}

export default function ViewsCount({viewsCount}: IProps) {
  return (
    <div className={styles.viewsCount}>{viewsCount}</div>
  )
}