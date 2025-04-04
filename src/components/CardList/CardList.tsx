import styles from "./CardList.module.css"
import React from "react";

interface IProps {
  children: React.ReactNode;
}

export default function CardList({children}: IProps) {

  return (
    <div className={styles.cardList}>
      {children}
    </div>
  )
}