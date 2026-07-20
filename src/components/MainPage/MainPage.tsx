import styles from './MainPage.module.css'
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";

interface iProps {
  mainPage?: boolean;
}

export default function MainPage({mainPage}: iProps) {
  return (
    <div className={styles.mainPage}>
      <Header mainPage={mainPage}/>
      <Outlet />
    </div>
  )
}
