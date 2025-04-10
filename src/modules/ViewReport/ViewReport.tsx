import styles from './ViewReport.module.css'
import {useParams} from "react-router";
import {Link, useNavigate} from "react-router-dom";
import {useGetReportQuery} from "../../store/services/reportApi";
import Content from "../../components/Content/Content";

export default function ViewReport() {

  const navigate = useNavigate()
  const {id} = useParams()
  const reportId: number = Number(id)

  const {data: report, isLoading} = useGetReportQuery(reportId)

  if (isLoading) {
    return (<div>Загрузка</div>)
  }

  if (!report) {
    return (
      <>
        <button className={styles.button} onClick={() => navigate(-1)}>Назад</button>
        <div>Отчет не найден</div>
      </>
    )
  }



  return (
    <div className={styles.viewReport}>
      <button className={styles.button} onClick={() => navigate(-1)}>Назад</button>
      <div className={styles.title}>{report.name}</div>
      <div className={styles.body}>
        <Content pStyles={styles} body={report.body} />
      </div>
      <button className={styles.button} onClick={() => navigate(-1)}>Назад</button>
    </div>
  )
}