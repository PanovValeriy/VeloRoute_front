import cn from "classnames";
import styles from "./CardItem.module.css"
import React from "react";
interface IProps {
  className?: string;
  children: React.ReactNode;
}
export default function CardItem({className, children}:IProps) {
  const cnCardItem = cn(styles.cardItem, className)
  return (
    <div className={cnCardItem}>
      {children}
    </div>
  )
}