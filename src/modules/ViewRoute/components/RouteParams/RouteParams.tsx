import styles from './RouteParams.module.css'
import {IRoute} from "../../../../types/types";
import cn from 'classnames'

interface IProps {
  className?: string;
  route: IRoute
}

export default function RouteParams({className, route}: IProps) {

  const cnRouteParams = cn(styles.routeParams, className)

  return (
    <div className={cnRouteParams}>
      <div className={styles.groupParam}>Параметры маршрута</div>
      <div className={styles.param}>
        <div className={styles.paramLabel}>Протяженность маршрута:</div>
        <div className={styles.paramValue}>{route.length}км</div>
      </div>
      <div className={styles.param}>
        <div className={styles.paramLabel}>Характер покрытия:</div>
        <div className={styles.paramValue}>асфальт:{route.asphalt}%, грейдер:{route.grader}%, грунт:{route.soit}%, дебри:{route.jungle}%</div>
      </div>
      <div className={styles.param}>
        <div className={styles.paramLabel}>Сложность маршрута:</div>
        <div className={styles.paramValue}>{route.complexity.name}</div>
      </div>
      <div className={styles.groupParam}>Трек</div>
      <div className={styles.param}>
        <div className={styles.paramLabel}>Нитка маршрута:</div>
        <div className={styles.paramValue}>
          {route.pointList}
        </div>
      </div>
      <div className={styles.param}>
        <div className={styles.paramLabel}>Трек с маршрутом:</div>
        <div className={styles.paramValue}>
          <a href={route.trackFileURL}>{route.name}</a>
        </div>
      </div>
    </div>
  )
}