import styles from "./EventParamsMobile.module.css"
import cn from "classnames"
import {IEvent} from "../../../../types/types";
import Icon from "../../../../components/Icon/Icon";
import dayjs from "dayjs";
import ButtonLink from "../../../../components/ButtonLink/ButtonLink";
import React, {useState} from "react";
import FormModal from "../../../../components/FormModal/FormModal";

interface IProps {
  className?: string;
  event: IEvent;
}

export default function EventParamsMobile({className, event}: IProps) {

  const [showParamsFull, setShowParamsFull] = useState(false);
  const cnEventParamsMobile = cn(styles.eventParamsMobile, className)

  return (
    <div className={cnEventParamsMobile}>
      <div className={styles.title}><span>{event.name}</span><div className={styles.buttonInfo} onClick={() => setShowParamsFull(true)}><Icon className={styles.buttonIcon} iconName="info" /></div></div>
      <div className={styles.details}>
        <div className={styles.dateTime}><Icon className={styles.dateTimeIcon} iconName="calendar" /><span>{dayjs(event.startDateTime).format('DD.MM.YYYY')}</span>{dayjs(event.startDateTime).format('MM:hh')}<span></span></div>
        <div className={styles.length}><Icon className={styles.lengthIcon} iconName="distance" /><span>{event.length} км</span></div>
      </div>
      {showParamsFull ? <FormModal onClick={() => setShowParamsFull(false)}/> : null }
      <div className={cn(styles.eventParamsFull, {[styles.showParamsFull]: showParamsFull})}>
        <div className={styles.buttonClose} onClick={() => setShowParamsFull(false)}><Icon className={styles.icon} iconName="close" /></div>
        <div className={styles.groupHorizontal}>
          <div className={styles.param}>
            <div className={styles.paramTitle}>Протяженность</div>
            <div className={styles.paramValue}><Icon className={styles.paramIcon} iconName="distance" /><span>{event.length} км</span></div>
          </div>
          <div className={styles.param}>
            <div className={styles.paramTitle}>Темп</div>
            <div className={styles.paramValue}><Icon className={styles.paramIcon} iconName="tempo" /><span>{event.tempo.name}</span></div>
          </div>
        </div>
        <div className={styles.param}>
          <div className={styles.paramTitle}>Дата и время старта</div>
          <div className={styles.paramValue}><Icon className={styles.paramIcon} iconName="calendar" /><span>{dayjs(event.startDateTime).format('DD.MM.YYYY')}</span></div>
          <div className={styles.paramValue}><Icon className={styles.paramIcon} iconName="clock" /><span>{dayjs(event.startDateTime).format('HH:mm')}</span></div>
        </div>
        <div className={styles.param}>
          <div className={styles.paramTitle}>Место старта</div>
          <div className={styles.paramValue}><Icon className={styles.paramIcon} iconName="location" /><span>{event.startPlace}</span></div>
        </div>
        <div className={styles.param}>
          <div className={styles.paramTitle}>Нитка маршрута</div>
          <div className={styles.paramValue}>{event.pointList}</div>
        </div>
        {(event.route || event.trackFileURL)
          ?
            <div className={styles.param}>
              <div className={styles.paramTitle}>Маршрут</div>
              {(event.route) ? <div className={styles.paramValue}><ButtonLink type="link_route" href={'/route/'+event.route?.id}>{event.route?.name}</ButtonLink></div> : null}
              {(event.trackFileURL) ? <div className={styles.paramValue}><ButtonLink type="download" href={event.trackFileURL}>Скачать GPX</ButtonLink></div> : null}
            </div>
          : null
        }
      </div>
    </div>
  )
}