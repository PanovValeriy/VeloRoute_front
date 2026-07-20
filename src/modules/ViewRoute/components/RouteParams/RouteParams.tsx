import styles from './RouteParams.module.css'
import {IRoute} from "../../../../types/types";
import cn from 'classnames'
import Icon from "../../../../components/Icon/Icon";
import Progress from "../../../../components/Progress/Progress";

interface IProps {
  className?: string;
  route: IRoute
}

export default function RouteParams({className, route}: IProps) {

  const cnRouteParams = cn(styles.routeParams, className)

  return (
    <div className={cnRouteParams}>
      {/*<div className={styles.groupParam}>Параметры маршрута</div>*/}
      {/*<div className={styles.param}>*/}
      {/*  <div className={styles.paramLabel}>Протяженность маршрута:</div>*/}
      {/*  <div className={styles.paramValue}>{route.length}км</div>*/}
      {/*</div>*/}
      {/*<div className={styles.param}>*/}
      {/*  <div className={styles.paramLabel}>Характер покрытия:</div>*/}
      {/*  <div className={styles.paramValue}>асфальт:{route.asphalt}%, грейдер:{route.grader}%, грунт:{route.soil}%, дебри:{route.jungle}%</div>*/}
      {/*</div>*/}
      {/*<div className={styles.param}>*/}
      {/*  <div className={styles.paramLabel}>Сложность маршрута:</div>*/}
      {/*  <div className={styles.paramValue}>{route.complexity.name}</div>*/}
      {/*</div>*/}
      {/*<div className={styles.groupParam}>Трек</div>*/}
      {/*<div className={styles.param}>*/}
      {/*  <div className={styles.paramLabel}>Нитка маршрута:</div>*/}
      {/*  <div className={styles.paramValue}>*/}
      {/*    {route.pointList}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className={styles.param}>*/}
      {/*  <div className={styles.paramLabel}>Трек маршрута:</div>*/}
      {/*  <div className={styles.paramValue}>*/}
      {/*    <a href={route.trackFileURL}>{route.name}</a>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className={styles.title}>{route.name}</div>
      <div className={styles.groupParamPrimary}>
        <div className={styles.length}>
          <div className={styles.param_name}>Протяженность</div>
          <div className={styles.length_value}><Icon iconName="distance" />{route.length} км</div>
        </div>
        <div className={styles.complexity}>
          <div className={styles.param_name}>Сложность</div>
          <div className={styles.complexity_value}>{route.complexity.name}</div>
        </div>
        <div className={styles.pointList}>
          <div className={styles.param_name}>Нитка маршрута</div>
          <div className={styles.pointList_value}>{route.pointList}</div>
        </div>
      </div>
      <div className={styles.groupParamSecondary}>
        <div className={styles.roadCoverage}>
          <div className={styles.param_name}>Характар покрытия</div>
          <div className={styles.roadCoverage_value}>
            <div className={styles.roadCoverage_asphalt}>
              <Icon className={styles.roadCoverage_icon} iconName="asphalt"/>
              <div className={styles.roadCoverage_wrapper}>
                <div className={styles.roadCoverage_description}><span>Асфальт</span><span>{route.asphalt}%</span></div>
                <Progress value={route.asphalt} />
              </div>
            </div>
            <div className={styles.roadCoverage_gravel}>
              <Icon className={styles.roadCoverage_icon} iconName="gravel"/>
              <div className={styles.roadCoverage_wrapper}>
                <div className={styles.roadCoverage_description}><span>Гравий</span><span>{route.grader}%</span></div>
                <Progress value={route.grader} />
              </div>
            </div>
            <div className={styles.roadCoverage_soil}>
              <Icon className={styles.roadCoverage_icon} iconName="soil"/>
              <div className={styles.roadCoverage_wrapper}>
                <div className={styles.roadCoverage_description}><span>Грунт</span><span>{route.soil}%</span></div>
                <Progress value={route.soil} />
              </div>
            </div>
            <div className={styles.roadCoverage_jungle}>
              <Icon className={styles.roadCoverage_icon} iconName="jungle"/>
              <div className={styles.roadCoverage_wrapper}>
                <div className={styles.roadCoverage_description}><span>Бездорожье</span><span>{route.jungle}%</span></div>
                <Progress value={route.jungle} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.track}>
          <div className={styles.param_name}>Трек маршрута</div>
          <a href={route.trackFileURL} className={styles.track_value}><Icon iconName="download"/> Скачать в формате GPX</a>
        </div>
      </div>
    </div>
  )
}