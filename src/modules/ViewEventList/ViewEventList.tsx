import styles from './ViewEventList.module.css'
import EventItem from "./components/EventItem/EventItem";
import {Link} from "react-router-dom";
import {useLazyGetEventListQuery} from "../../store/services/eventApi";
import {useEffect} from "react";

export default function ViewEventList() {

  const [getEventList, {data}] = useLazyGetEventListQuery()

  useEffect(() => {
    getEventList({})
  }, [getEventList])

  if (!data) {
    return null
  }

  return (
    <div className={styles.viewEventList}>
      <Link to={"/"}><button className={styles.button}>На главную</button></Link>
      <div className={styles.title}>События</div>
      <div className={styles.eventList}>
        {data!.eventList.map((event, idx) => (
          <Link key={idx} className={styles.linkItem} to={"/event/"+event.id}>
            <EventItem classname={styles.eventItem} key={idx} event={event}/>
          </Link>
        ))}
      </div>
      <Link to={"/"}><button className={styles.button}>На главную</button></Link>
    </div>
  )
}