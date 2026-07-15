import { IEvent } from "../../types/types"
import Icon from "../Icon/Icon"
import styles from "./FirstEvent.module.css"
import dayjs from "dayjs"

interface IProps {
  event: IEvent;
}

export default function FirstEvent({event}: IProps) {
  return (
    <div className={styles.firstEvent}>
      <Icon iconName="calendar" className={styles.icon}/>
      <div className={styles.param}>
        <div className={styles.title}>Ближайшее событие</div>
        <div className={styles.description}>{event.name} - {dayjs(event.startDateTime).format('DD.MM.YYYY')} {dayjs(event.startDateTime).format('HH.mm')}</div>
      </div>
    </div>
  )
}