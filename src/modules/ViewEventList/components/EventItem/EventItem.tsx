import styles from './EventItem.module.css'
import {IEventShort} from "../../../../types/types";
import dayjs from "dayjs";

interface IProps {
  event: IEventShort,
}

export default function EventItem({event}: IProps) {

  return (
    <>
      <div className={styles.content}>
        <div className={styles.title}>
          {event.name}
        </div>
        <div className={styles.param}>
          Дата: {dayjs(event.startDateTime).format('DD.MM.YYYY')}
        </div>
        <div className={styles.param}>
          Время старта: {dayjs(event.startDateTime).format('HH:mm')}
        </div>
        <div className={styles.param}>
          Место старта: {event.startPlace}
        </div>
        <div className={styles.param}>
          Протяженность: {event.length}
        </div>
        <div className={styles.param}>
          Тип: {event.typeEvent.name}
        </div>
        <div className={styles.param}>
          Темп: {event.tempo.name}
        </div>
      </div>
      <div className={styles.photoWrapper}>
        <img className={styles.photo} src={event.photoURL} alt=""/>
      </div>
    </>
  )
}