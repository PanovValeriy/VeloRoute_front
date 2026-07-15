import { IEvent } from "../../types/types"
import Icon from "../Icon/Icon"
import styles from "./FirstEvent.module.css"
import dayjs from "dayjs"
import {Link} from "react-router-dom";

interface IProps {
  event: IEvent;
}

export default function FirstEvent({event}: IProps) {
  return (
    <Link className={styles.firstEvent} to={"/event/"+event.id}>
      <Icon iconName="calendar" className={styles.icon}/>
      <div className={styles.param}>
        <div className={styles.title}>Ближайшее событие - {dayjs(event.startDateTime).format('DD.MM.YYYY')} {dayjs(event.startDateTime).format('HH.mm')}</div>
        <div className={styles.description}>{event.name}</div>
      </div>
    </Link>
  )
}