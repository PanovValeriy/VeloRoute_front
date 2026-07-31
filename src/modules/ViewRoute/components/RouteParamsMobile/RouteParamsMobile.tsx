import styles from "./RouteParamsMobile.module.css"
import cn from "classnames"
import Icon from "../../../../components/Icon/Icon";
import {IRoute} from "../../../../types/types";
import Progress from "../../../../components/Progress/Progress";
import React, {useState} from "react";
import FormModal from "../../../../components/FormModal/FormModal";
import ButtonLink from "../../../../components/ButtonLink/ButtonLink";

interface IProps {
  className?: string;
  route: IRoute
}

export default function RouteParamsMobile({className, route}: IProps) {

  const [showParamFull, setShowParamsFull] = useState(false);

  function handleClickButtonShowParamFull() {
    setShowParamsFull(!showParamFull);
  }

  const cnRouteParamsMobile = cn(styles.routeParamsMobile, className)
  const cnComplexityIcon = cn(styles.icon, {
    [styles.light]: route.complexity.id === 1,
    [styles.medium]: route.complexity.id === 2,
    [styles.hard]: route.complexity.id === 3,
  })
  const cnParamsFull = cn(styles.paramsFull, {[styles.showParamsFull]: showParamFull})

  return (
    <div className={cnRouteParamsMobile}>
      <div className={styles.title}><span>{route.name}</span><div className={styles.buttonInfo} onClick={handleClickButtonShowParamFull} ><Icon className={styles.iconInfo} iconName="info" /></div></div>
      <div className={styles.paramsBasic}>
        <div className={styles.length}><Icon className={styles.icon} iconName="distance" /><span>{route.length} км</span></div>
        <div className={styles.complexity}><span className={cnComplexityIcon} /><span>{route.complexity.name}</span></div>
      </div>
      {(showParamFull) ? <FormModal onClick={()=>setShowParamsFull(false)} /> : null}
      <div className={cnParamsFull}>
        <div className={styles.buttonClose} onClick={() => setShowParamsFull(false)}><Icon className={styles.icon} iconName="close" /></div>
        <div className={styles.group1}>
          <div className={styles.length}>
            <div className={styles.title}>Протяженность</div>
            <div className={styles.value}><Icon className={styles.icon} iconName="distance" /><span>{route.length} км</span></div>
          </div>
          <div className={styles.complexity}>
            <div className={styles.title}>Сложность</div>
            <div className={styles.value}><span className={cnComplexityIcon} /><span>{route.complexity.name}</span></div>
          </div>
        </div>
        <div className={styles.group2}>
          <div className={styles.title}>Нитка маршрута</div>
          <div className={styles.value}>{route.pointList}</div>
        </div>
        <div className={styles.group3}>
          <div className={styles.value}>
            <Icon className={styles.icon} iconName="asphalt"/>
            <div className={styles.wrapper}>
              <div className={styles.description}><div>Асфальт</div><div>{route.asphalt}%</div></div>
              <Progress value={route.asphalt} />
            </div>
          </div>
          <div className={styles.value}>
            <Icon className={styles.icon} iconName="gravel"/>
            <div className={styles.wrapper}>
              <div className={styles.description}><div>Грейдер</div><div>{route.grader}%</div></div>
              <Progress value={route.grader} />
            </div>
          </div>
          <div className={styles.value}>
            <Icon className={styles.icon} iconName="soil"/>
            <div className={styles.wrapper}>
              <div className={styles.description}><div>Грунт</div><div>{route.soil}%</div></div>
              <Progress value={route.soil} />
            </div>
          </div>
          <div className={styles.value}>
            <Icon className={styles.icon} iconName="jungle"/>
            <div className={styles.wrapper}>
              <div className={styles.description}><div>Бездорожье</div><div>{route.jungle}%</div></div>
              <Progress value={route.jungle} />
            </div>
          </div>
        </div>
        {(route.trackFileURL)
          ?
            <div className={styles.group4}>
              <div className={styles.title}>Трек маршрута</div>
                <ButtonLink type="download" href={route.trackFileURL}>Скачать GPX</ButtonLink>
            </div>
          :
            null
        }
      </div>
    </div>
  )
}