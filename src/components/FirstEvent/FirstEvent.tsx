import styles from "./FirstEvent.module.css"
import cn from "classnames"
import Icon from "../Icon/Icon"
import dayjs from "dayjs"
import {Link} from "react-router-dom";
import {useGetEventFirstQuery} from "../../store/services/eventApi";

export default function FirstEvent() {
  const {data: event, isLoading} = useGetEventFirstQuery(null)
  const eventDate = (isLoading) ? 'Загрузка' : (event) ? `Ближайшее событие - ${dayjs(event.startDateTime).format('DD.MM.YYYY')} ${dayjs(event.startDateTime).format('HH.mm')}` : 'Предстоящих событий нет'
  const cnFirstEvent = cn(styles.firstEvent, {[styles.noEvent]: (!event)})

  return (
    <Link className={cnFirstEvent} to={(event) ? "/event/"+event.id : "#"}>
      <Icon iconName="calendar" className={styles.icon}/>
      <div className={styles.param}>
        <div className={styles.title}>{eventDate}</div>
        <div className={styles.description}>{(event) ? event.name : ""}</div>
      </div>
    </Link>
  )
}