import styles from './ViewEventList.module.css'
import EventItem from "./components/EventItem/EventItem";
import {Link} from "react-router-dom";
import {useLazyGetEventListQuery} from "../../store/services/eventApi";
import {useEffect} from "react";
import CardItem from "../../components/CardItem/CardItem";
import cn from "classnames";
import dayjs from "dayjs";
import CardList from "../../components/CardList/CardList";

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
      <CardList>
        {data!.eventList.map((event, idx) => (
          <Link key={idx} className={styles.linkItem} to={"/event/"+event.id}>
            <CardItem className={cn(styles.eventItem, (dayjs(event.startDateTime) < dayjs(Date())) ? styles.eventItemHistory : null)}>
              <EventItem key={idx} event={event}/>
            </CardItem>
          </Link>
        ))}
      </CardList>
      <Link to={"/"}><button className={styles.button}>На главную</button></Link>
    </div>
  )
}