import {Link} from "react-router-dom";
import styles from './ViewMain.module.css'
import ButtonImage from "./components/ButtonImage/ButtonImage";
import NewsPanel from "../../components/NewsPanel/NewsPanel";

export default function ViewMain() {

  return (
    <div className={styles.viewMain}>
      <div className={styles.buttonGroup}>
        <Link className={styles.link} to={'/routes'}><ButtonImage className={styles.buttonRoute} iconName="route" label="Маршруты" /></Link>
        <Link className={styles.link} to={'/reports'}><ButtonImage className={styles.buttonReport} iconName="report" label="Отчеты" /></Link>
        <Link className={styles.link} to={'/events'}><ButtonImage className={styles.buttonEvent} iconName="event" label="События" /></Link>
        <Link className={styles.link} to={'/infos'} style={{display: "none"}}><ButtonImage className={styles.buttonInfo} iconName="info" label="Информация" /></Link>
      </div>
      <NewsPanel />
    </div>
  )
}