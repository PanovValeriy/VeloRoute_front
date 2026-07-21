import styles from './ViewReport.module.css'
import {useParams} from "react-router";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useGetReportQuery} from "../../store/services/reportApi";
import Content from "../../components/Content/Content";
import ReportHeader from "./components/ReportHeader/ReportHeader";
import dayjs from "dayjs";

export default function ViewReport() {

  // const navigate = useNavigate()
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
        {/*<button className={styles.button} onClick={() => navigate(-1)}>Назад</button>*/}
        <div>Отчет не найден</div>
      </>
    )
  }
  return (
    <div className={styles.viewReport}>
      {/*<Button className={styles.button} onClick={() => navigate(-1)}>Назад</Button>*/}
      {/*<DateCreateUpdate className={styles.dateCreateUpdate} dateCreate={report.dateCreate} dateUpdate={report.dateUpdate} />*/}
      <div className={styles.title}>Отчет "{report.name}" ({dayjs(report.date).format('DD.MM.YYYY')})</div>
      <ReportHeader dateReport={report.date} route={report.route} event={report.event} />
      <Content title="Отчет" body={report.body} />
    </div>
  )
}