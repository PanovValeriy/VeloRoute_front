import styles from './ViewReport.module.css'
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {useGetReportQuery} from "../../store/services/reportApi";
import Content from "../../components/Content/Content";

export default function ViewReport() {
  const {id} = useParams()
  const reportId: number = Number(id)

  const {data: report} = useGetReportQuery(reportId)

  if (!report) {
    return (
      <div>Report not found</div>
    )
  }

  return (
    <div className={styles.viewReport}>
      <Link to={"/reports"}><button className={styles.button}>К списку отчетов</button></Link>
      <div className={styles.title}>{report.name}</div>
      <div className={styles.body}>
        <Content pStyles={styles} body={report.body} />
      </div>
      <Link to={"/reports"}><button className={styles.button}>К списку отчетов</button></Link>
    </div>
  )
}