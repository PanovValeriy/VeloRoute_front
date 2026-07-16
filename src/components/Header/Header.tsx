import styles from './Header.module.css'
import cn from "classnames"
import NavBar from '../NavBar/NavBar';
import Title from "./components/Title/Title";
import React from "react";
interface IProps {
  mainPage?: boolean;
}

export default function Header({mainPage}: IProps) {
  const cnHeader = cn(styles.header, {[styles.headerBackground]: mainPage});

  return (
    <>
      <div className={cnHeader}>
        <NavBar />
        {mainPage ? <Title /> : null }
      </div>
    </>
  )
}