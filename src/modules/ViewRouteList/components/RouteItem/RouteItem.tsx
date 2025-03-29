import styles from './RouteItem.module.css'
import {IRouteShort} from "../../../../types/types";
import cn from "classnames";

interface IProps {
  classname?: string;
  route: IRouteShort;
}

export default function RouteItem({classname, route}: IProps) {

  const cnRouteItem = cn(styles.routeItem, classname)

  return (
    <div className={cnRouteItem}>
      <div className={styles.content}>
        <div className={styles.title}>
          {route.name}
        </div>
        <div className={styles.paramLabel}>
          Протяженность: <span className={styles.paramValue}>{route.length} км</span>
        </div>
        <div className={styles.paramLabel}>
          Сложность маршрута: <span className={styles.paramValue}>{route.complexity.name}</span>
        </div>
        <div className={styles.pavement}>
          <div className={styles.pavementTitle}>Характер покрытия:</div>
          <ul className={styles.pavementList}>
            <li>асфальт: {route.asphalt}%</li>
            <li>грейдер: {route.grader}%</li>
            <li>грунт: {route.soil}%</li>
            <li>дебри: {route.jungle}%</li>
          </ul>
        </div>
      </div>
      <div className={styles.photoWrapper}>
        <img className={styles.photo} src={route.photoURL} alt=""/>
      </div>
    </div>
  )
}