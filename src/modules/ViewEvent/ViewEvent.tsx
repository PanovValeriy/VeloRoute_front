import styles from './ViewEvent.module.css'
import {useParams} from "react-router";
import {useSearchParams} from "react-router-dom";
import EventParams from "./components/EventParams/EventParams";
import {useGetEventQuery} from "../../store/services/eventApi";
import Content from "../../components/Content/Content";
import {useGetReportListQuery} from "../../store/services/reportApi";
import ReportList from "../../components/ReportList/ReportList";

export default function ViewEvent() {

  const {id} = useParams();
  const [searchParams] = useSearchParams()
  // const navigate = useNavigate()
  const eventId: number = Number(id);
  const code = searchParams.get('code') || ''
  const {data: event, isLoading} = useGetEventQuery({eventId, code})
  const {data: dataReportList} = useGetReportListQuery({eventId, sort: 'date:desc'})

  if (isLoading) {
    return (<div>Загрузка</div>)
  }

  if (!event) {
    return (
      <>
        {/*<button className={styles.button} onClick={() => navigate(-1)}>Назад</button>*/}
        <div>Событие не найдено</div>
      </>
    )
  }
  let eventBody: string = event.description
  if (event.miniReport) {
    eventBody = eventBody + '\n[TITLE]Миниотчет[/TITLE]\n' + event.miniReport;
  }
  return (
    <div className={styles.viewEvent}>
      {/*<Button className={styles.button} onClick={() => navigate(-1)}>Назад</Button>*/}
      <div className={styles.params}>
        <div className={styles.paramsImageWrapper}>
          <img className={styles.paramsImage}
               src={event.photoURL}
               alt=""/>
        </div>
        <EventParams className={styles.eventParams} event={event}/>
      </div>
      <Content title="Описание события" body={eventBody} />
      {((dataReportList) && (dataReportList.recCount !== 0)) ? <ReportList title="Отчеты по событию" reportList = {dataReportList.reportList}/> : null}
    </div>
  )
}