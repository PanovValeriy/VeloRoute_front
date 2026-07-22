import styles from "./EventCard.module.css"
import cn from "classnames"
import { IEventShort } from "../../types/types";
import Icon from "../Icon/Icon";
import dayjs from "dayjs";
import Status from "../Status/Status";
import {Link} from "react-router-dom";
import Button from "../Button/Button";

interface IProps {
  className?: string;
  event: IEventShort;
  showViews?: boolean;
}

export default function EventCard({className, event, showViews}:IProps) {
  const closed = dayjs(event.startDateTime) < dayjs(new Date())
  const cnEventCard = cn(styles.eventCard, className)

  return (
    <div className={cnEventCard}>
      <div className={styles.photo}>
        <img src={event.photoURL} alt="Фото" />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <div className={styles.name}>{event.name}</div>
          <Status closed={closed}>{closed ? "Завершено" : "Предстоит"}</Status>
        </div>
        <div className={styles.details}>
          <div className={styles.startDateTime}>
            <Icon iconName="calendar" className={styles.icon}/>
            <div>{dayjs(event.startDateTime).format('DD.MM.YYYY')}</div>
            <div>{dayjs(event.startDateTime).format('HH:mm')}</div>
          </div>
          <Icon iconName="delimeter" />
          <div className={styles.distance}>
            <Icon iconName="distance" className={styles.icon} />
            {event.length}км
          </div>
          <Icon iconName="delimeter" />
          <div className={styles.tempo}>
            <Icon iconName="pace" className={styles.icon} />
            {event.tempo.name}
          </div>
          <Icon iconName="delimeter" />
          <div className={styles.typeEvent}>
            {event.typeEvent.name}
          </div>
        </div>
        <div>
          <Link to={'/event/'+event.id.toString()} tabIndex={-1}><Button className={styles.button}>Подробнее</Button></Link>
        </div>
      </div>
    </div>
  )
}