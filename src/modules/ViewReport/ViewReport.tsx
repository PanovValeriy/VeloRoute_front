import styles from './ViewReport.module.css'
import {useParams} from "react-router";
import {useSearchParams} from "react-router-dom";
import {useGetReportQuery} from "../../store/services/reportApi";
import Content from "../../components/Content/Content";
import ReportHeader from "./components/ReportHeader/ReportHeader";
import dayjs from "dayjs";
import ButtonBack from "../../components/ButtonBack/ButtonBack";

export default function ViewReport() {

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
      <div>Отчет не найден</div>
    )
  }
  return (
    <div className={styles.viewReport}>
      <ButtonBack />
      <div className={styles.title}>{report.name}</div>
      <div className={styles.dateRide}>Дата поездки: {dayjs(report.date).format('DD.MM.YYYY')}</div>
      <div className={styles.header}>
        <ReportHeader className={styles.header} route={report.route} event={report.event} />
      </div>
      <Content title="Отчет" body={report.body} />
      <div className={styles.footer}>
        <ReportHeader route={report.route} event={report.event} />
      </div>
    </div>
  )
}