import styles from "./Status.module.css"
import cn from "classnames"

interface IProps {
  className?: string;
  closed: boolean;
  children: React.ReactNode;  
}

export default function Status({className, closed, children}: IProps) {
  
  const cnStatus = cn(styles.status, {[styles.closed]: closed})
  
  return (
    <div className={cnStatus}>
      {children}
    </div>
  )
}