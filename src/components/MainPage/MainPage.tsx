import styles from './MainPage.module.css'
import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header";
import MenuMobile from "./components/MenuMobile/MenuMobile";

interface iProps {
  mainPage?: boolean;
}

export default function MainPage({mainPage}: iProps) {
  return (
    <div className={styles.mainPage}>
      <Header mainPage={mainPage}/>
      <Outlet />
      <MenuMobile className={styles.menuMobile}/>
      <div className={styles.footer}></div>
    </div>
  )
}
