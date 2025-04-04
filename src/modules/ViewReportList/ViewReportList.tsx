import styles from './ViewReportList.module.css'
import ReportItem from "./components/ReportItem/ReportItem";
import {Link} from "react-router-dom";
import {useLazyGetReportListQuery} from "../../store/services/reportApi";
import {useEffect} from "react";
import CardItem from "../../components/CardItem/CardItem";
import CardList from "../../components/CardList/CardList";

export default function ViewReportList() {

  const [getReportList,{data}] = useLazyGetReportListQuery()

  useEffect(() => {
    getReportList({})
  }, [getReportList])

  if (!data) {
    return (
      <div>Загрузка</div>
    )
  }

  return (
    <div className={styles.viewReportList}>
      <Link to={"/"}><button className={styles.button}>На главную</button></Link>
      <div className={styles.title}>Отчеты</div>
      <CardList>
      {data!.reportList.map((report, idx) => (
        <Link className={styles.linkItem} to={"/report/"+report.id}>
          <CardItem className={styles.reportItem}>
            <ReportItem key={idx} report={report}/>
          </CardItem>
        </Link>
      ))}
      </CardList>
      <Link to={"/"}><button className={styles.button}>На главную</button></Link>
    </div>
  )
}