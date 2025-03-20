import styles from './MainPage.module.css'
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function MainPage() {
  return (
    <div className={styles.mainPage}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
