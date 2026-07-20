import styles from './ViewMain.module.css'
import RouteCardList from "./components/RouteCardList/RouteCardList";
import ReportCardList from "./components/ReportCardLilst/ReportCardList";

export default function ViewMain() {

  return (
    <div className={styles.viewMain}>
      <div className={styles.content}>
        <RouteCardList />
        <ReportCardList />
      </div>
    </div>
  )
}