import styles from './ViewEvent.module.css'
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import EventParams from "./components/EventParams/EventParams";
import dayjs from "dayjs";
import {useGetEventQuery} from "../../store/services/eventApi";


function createContent(body: string) {
  const bodyArr = body.split('\n')
  let result = []
  let key = 0
  function getKey() {
    return `rc_${++key}`
  }
  for (const p of bodyArr) {
    let pStart = 0
    while (p.indexOf('[IMG]', pStart) !== -1) {
      const imgStart = p.indexOf('[IMG]', pStart)
      const imgEnd = p.indexOf('[/IMG]', imgStart)
      result.push(
        <p className={styles.paragraph} key={getKey()}>
          {p.slice(0, imgStart)}
        </p>
      )
      result.push(
        <img
          className={styles.photo}
          key={getKey()}
          src={p.slice(imgStart + 5, imgEnd)}
          alt="Фото"
        />
      )
      pStart = imgEnd + 6
    }
    result.push(
      <p className={styles.paragraph} key={getKey()}>
        {p.slice(pStart, p.length)}
      </p>
    )
  }
  return result
}

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

      <div className={styles.body}>{createContent(event.description)}</div>
      <Link to={"/events"}><button className={styles.button}>К списку событий</button></Link>
    </div>
  )
}