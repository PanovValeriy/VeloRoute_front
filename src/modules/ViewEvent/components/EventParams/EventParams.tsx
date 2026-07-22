import styles from './EventParams.module.css'
import {IEvent} from "../../../../types/types";
import cn from 'classnames'
import dayjs from "dayjs";
import Icon from "../../../../components/Icon/Icon";
import ButtonLink from "../../../../components/ButtonLink/ButtonLink";

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
          <div className={styles.length_value}><Icon className={styles.length_icon} iconName="distance" /> {event.length} км</div>
        </div>
        <div className={styles.startDateTime}>
          <div className={styles.param_name}>Дата и время</div>
          <div className={styles.startDateTime_value}><Icon className={styles.startDateTime_icon} iconName="calendar" />{dayjs(event.startDateTime).format('DD.MM.YYYY')}</div>
          <div className={styles.startDateTime_value}><Icon className={styles.startDateTime_icon} iconName="clock" />{dayjs(event.startDateTime).format('HH.mm')}</div>
        </div>
        <div className={styles.startPlace}>
          <div className={styles.param_name}>Место старта</div>
          <div className={styles.startPlace_value}>{event.startPlace}</div>
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
          {(event.route)
            ? <>
                <ButtonLink type="link_route" href={'/route/'+event.route?.id}>{event.route?.name}</ButtonLink>
              </>
            :
            null
          }
          {(event.trackFileURL)
            ? <ButtonLink type="download" href={event.trackFileURL}>Скачать GPX</ButtonLink>
            : null
          }
        </div>
      </div>
    </div>
  )
}