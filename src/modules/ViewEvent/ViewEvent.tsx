import styles from './ViewEvent.module.css'
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import EventParams from "./components/EventParams/EventParams";
import dayjs from "dayjs";
import {useGetEventQuery} from "../../store/services/eventApi";
import Content from "../../components/Content/Content";

export default function ViewEvent() {

  const {id} = useParams();
  const eventId: number = Number(id);
  const {data: event} = useGetEventQuery(eventId)

  if (!event) {
    return (
      <div>Event not found</div>
    )
  }
  return (
    <div className={styles.viewEvent}>
      <Link to={"/events"}><button className={styles.button}>К списку событий</button></Link>
      <div className={styles.title}>{event.name} - ({dayjs(event.startDateTime).format('DD.MM.YYYY')})</div>

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
      <Link to={"/events"}><button className={styles.button}>К списку событий</button></Link>
    </div>
  )
}