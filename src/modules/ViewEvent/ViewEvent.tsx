import styles from './ViewEvent.module.css'
import {useParams} from "react-router";
import {Link, useNavigate} from "react-router-dom";
import EventParams from "./components/EventParams/EventParams";
import dayjs from "dayjs";
import {useGetEventQuery} from "../../store/services/eventApi";
import Content from "../../components/Content/Content";

export default function ViewEvent() {

  const {id} = useParams();
  const navigate = useNavigate()
  const eventId: number = Number(id);
  const {data: event, isLoading} = useGetEventQuery(eventId)

  if (isLoading) {
    return (<div>Загрузка</div>)
  }

  if (!event) {
    return (
      <>
        <button className={styles.button} onClick={() => navigate(-1)}>Назад</button>
        <div>Событие не найдено</div>
      </>
    )
  }
  return (
    <div className={styles.viewEvent}>
      <button className={styles.button} onClick={() => navigate(-1)}>Назад</button>
      <div className={styles.title}>Событие "{event.name}" ({dayjs(event.startDateTime).format('DD.MM.YYYY')})</div>

      <div className={styles.params}>
        <div className={styles.paramsImageWrapper}>
          <img className={styles.paramsImage}
               src={event.photoURL}
               alt=""/>
        </div>
        <EventParams className={styles.eventParams} event={event}/>
      </div>

      <div className={styles.body}>
        <Content pStyles={styles} body={event.description} />
      </div>
      <button className={styles.button} onClick={() => navigate(-1)}>Назад</button>
    </div>
  )
}