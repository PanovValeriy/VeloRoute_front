import styles from './EventParams.module.css'
import {IEvent} from "../../../../types/types";
import cn from 'classnames'
import dayjs from "dayjs";
import Icon from "../../../../components/Icon/Icon";
import {Link} from "react-router-dom";

interface IProps {
  className?: string;
  event: IEvent
}

export default function EventParams({className, event}: IProps) {

  const cnEventParams = cn(styles.eventParams, className)

  return (
    <div className={cnEventParams}>
      <div className={styles.title}>{event.name}</div>
      <div className={styles.groupParamPrimary}>
        <div className={styles.length}>
          <div className={styles.param_name}>Протяженность</div>
          <div className={styles.length_value}><Icon iconName="distance" /> {event.length} км</div>
        </div>
        <div className={styles.dateTimeStart}>
          <div className={styles.param_name}>Дата и время</div>
          <div className={styles.dateTimeStart_value}><Icon className={styles.dateTimeStart_icon} iconName="calendar" />{dayjs(event.startDateTime).format('DD.MM.YYYY')}</div>
          <div className={styles.dateTimeStart_value}><Icon className={styles.dateTimeStart_icon} iconName="calendar" />{dayjs(event.startDateTime).format('HH.mm')}</div>
        </div>
        <div className={styles.placeStart}>
          <div className={styles.param_name}>Место старта</div>
          <div className={styles.placeStart_value}>{event.startPlace}</div>
        </div>
        <div className={styles.tempo}>
          <div className={styles.param_name}>Темп</div>
          <div className={styles.tempo_value}><Icon className={styles.tempo_icon} iconName="pace" />{event.tempo.name}</div>
        </div>
      </div>
      <div className={styles.groupParamSecondary}>
        <div className={styles.pointList}>
          <div className={styles.param_name}>Нитка маршрута</div>
          <div className={styles.pointList_value}>{event.pointList}</div>
        </div>
        <div className={styles.track}>
          <div className={styles.param_name}>Маршрут</div>
          <Link className={styles.track_value} to={'/route/'+event.route?.id}><Icon className={styles.track_icon} iconName="route" />{event.route?.name}</Link>
          <a href={event.trackFileURL} className={styles.track_value}><Icon className={styles.track_icon} iconName="download" />Скачать GPX</a>
        </div>
      </div>
    </div>
  )
}