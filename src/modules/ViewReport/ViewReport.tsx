import styles from './ViewReport.module.css'
import {useParams} from "react-router";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {useGetReportQuery} from "../../store/services/reportApi";
import Content from "../../components/Content/Content";
import ReportHeader from "./components/ReportHeader/ReportHeader";

export default function ViewReport() {

  const navigate = useNavigate()
  const {id} = useParams()
  const [searchParams] = useSearchParams()
  const reportId: number = Number(id)

  const code = searchParams.get('code') || ''
  const {data: report, isLoading} = useGetReportQuery({reportId, code})

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
      <div className={styles.title}>Отчет "{report.name}"</div>
      <ReportHeader dateReport={report.date} route={report.route} event={report.event} />
      <div className={styles.body}>
        <Content pStyles={styles} body={report.body} />
      </div>
      <button className={styles.button} onClick={() => navigate(-1)}>Назад</button>
    </div>
  )
}