import styles from "./ReportHeader.module.css"
import cn from "classnames"
import {
  IEvent,
  IEventShort,
  IRoute,
  IRouteShort,
} from "../../../../types/types";
import RouteCard from "../../../../components/RouteCard/RouteCard";
import EventCard from "../../../../components/EventCard/EventCard";

interface IProps {
  className?: string;
  route?: IRoute | null;
  event?: IEvent | null;
}

export default function ReportHeader({className, route, event}: IProps) {

  const cnReportHeader = cn(styles.reportHeader, className)
  let routeShort: IRouteShort | undefined = undefined
  if (route) {
    routeShort = {
      id: route.id,
      author: route.author,
      name: route.name,
      photoURL: route.photoURL,
      length: route.length,
      complexity: route.complexity,
      asphalt: route.asphalt,
      grader: route.grader,
      soil: route.soil,
      jungle: route.jungle,
      viewsCount: 0,
      likesCount: route.likesCount,
      like: route.like,
    }
  }

  let eventShort: IEventShort | undefined = undefined
  if (event) {
    eventShort = {
      id: event.id,
      author: event.author,
      route: event.route,
      name: event.name,
      photoURL: event.photoURL,
      typeEvent: event.typeEvent,
      length: event.length,
      tempo: event.tempo,
      startDateTime: event.startDateTime,
      startPlace: event.startPlace,
      viewsCount: 0,
      miniReportTrue: false,
      likesCount: event.likesCount,
      like: event.like,
      membersCount: event.membersCount,
      member: event.member,
    }
  }

  if (!(routeShort || eventShort)) {
    return null
  }

  return (
    <div className={cnReportHeader}>
      {(routeShort)
        ? <div className={styles.cardWrapper}>
            Маршрут
            <RouteCard route={routeShort} showViews={false} showLikes={false}/>
          </div>
        : null}
      {(eventShort)
        ? <div className={styles.cardWrapper}>
            Событие
            <EventCard event={eventShort} showViews={false} showMember={false}/>
          </div>
        : null}
    </div>
  )
}