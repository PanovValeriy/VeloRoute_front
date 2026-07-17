import { IEventShort } from "../../types/types"
import Icon from "../Icon/Icon"
import styles from "./FirstEvent.module.css"
import dayjs from "dayjs"
import {Link} from "react-router-dom";
import {useGetEventFirstQuery} from "../../store/services/eventApi";
import {useEffect} from "react";

export default function FirstEvent() {
  const {data: event, isLoading} = useGetEventFirstQuery(null)
  const eventDate = (isLoading) ? 'Загрузка' : (event) ? `Ближайшее событие - ${dayjs(event.startDateTime).format('DD.MM.YYYY')} ${dayjs(event.startDateTime).format('HH.mm')}` : 'Предстоящих событий нет'

  return (
    <Link className={styles.firstEvent} to={(event) ? "/event/"+event.id : ""}>
      <Icon iconName="calendar" className={styles.icon}/>
      <div className={styles.param}>
        <div className={styles.title}>{eventDate}</div>
        <div className={styles.description}>{(event) ? event.name : ""}</div>
      </div>
    </Link>
  )
}