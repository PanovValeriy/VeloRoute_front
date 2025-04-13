import styles from './EventParams.module.css'
import {IEvent} from "../../../../types/types";
import cn from 'classnames'
import dayjs from "dayjs";

interface IProps {
  className?: string;
  event: IEvent
}

export default function EventParams({className, event}: IProps) {

  const cnEventParams = cn(styles.eventParams, className)

  return (
    <div className={cnEventParams}>
      <div className={styles.groupParam}>Параметры маршрута</div>
      {(event.route)
        ? <div className={styles.param}>
            <div className={styles.paramLabel}>Маршрут взятый за основу:</div>
            <div className={styles.paramValue}><a href={`/route/${event.route?.id}`}>{event.route?.name}</a></div>
          </div>
        : null
      }
      <div className={styles.param}>
        <div className={styles.paramLabel}>Протяженность маршрута:</div>
        <div className={styles.paramValue}>{event.length}км</div>
      </div>
      <div className={styles.param}>
        <div className={styles.paramLabel}>Темп:</div>
        <div className={styles.paramValue}>{event.tempo.name}</div>
      </div>
      <div className={styles.groupParam}>Трек</div>
      <div className={styles.param}>
        <div className={styles.paramLabel}>Нитка маршрута:</div>
        <div className={styles.paramValue}>
          {event.pointList}
        </div>
      </div>
      <div className={styles.param}>
        <div className={styles.paramLabel}>Трек с маршрутом:</div>
        <div className={styles.paramValue}><a
          href={event.trackFileURL}>{event.name}</a></div>
      </div>
      <div className={styles.groupParam}>Место и время старта</div>
      <div className={styles.param}>
        <div className={styles.paramLabel}>Место старта:</div>
        <div className={styles.paramValue}>{event.startPlace}</div>
      </div>
      <div className={styles.param}>
        <div className={styles.paramLabel}>Дата старта:</div>
        <div className={styles.paramValue}>{dayjs(event.startDateTime).format('DD.MM.YYYY')}</div>
      </div>
      <div className={styles.param}>
        <div className={styles.paramLabel}>Время старта:</div>
        <div className={styles.paramValue}>{dayjs(event.startDateTime).format('HH:mm')}</div>
      </div>
    </div>
  )
}