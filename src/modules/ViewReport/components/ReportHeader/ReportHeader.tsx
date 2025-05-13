import styles from "./ReportHeader.module.css"
import cn from "classnames"
import {IEvent, IRoute} from "../../../../types/types";
import dayjs from "dayjs";

interface IProps {
  className?: string;
  dateReport?: Date;
  route?: IRoute | null;
  event?: IEvent | null;
}

export default function ReportHeader({className, dateReport, route, event}: IProps) {

  const cnReportHeader = cn(styles.reportHeader, className)

  return (
    <div className={cnReportHeader}>
      <div>Дата поездки: {dayjs(dateReport).format('DD.MM.YYYY')}</div>
      {(route) ? <div>Маршрут: <a href={`/route/${route.id}`}>{route?.name}</a></div> : null}
      {(event) ? <div>Событие: <a href={`/event/${event.id}`}>{event?.name}</a></div> : null}
    </div>
  )
}