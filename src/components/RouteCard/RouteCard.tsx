import { Link } from "react-router";
import { IRouteShort } from "../../types/types";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import styles from "./RouteCard.module.css";
import cn from "classnames";
import ViewCount from "../ViewCount/ViewCount";

interface IProps {
  className?: string;
  route: IRouteShort;
  showViews?: boolean;
}

export default function RouteCard({className, route, showViews}: IProps) {
  const cnDifficulty = cn(styles.difficulty, className,
    {
      [styles.light]: route.complexity.id === 1,
      [styles.medium]: route.complexity.id === 2,
      [styles.hard]: route.complexity.id === 3,
    })

  return (
    <div className={styles.routeCard}>
      {showViews ? <ViewCount className={styles.viewCount} count={route.viewsCount} /> : null}
      <div className={styles.photo}>
        <img src={route.photoURL} alt="Фото" />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          {route.name}
        </div>
        <div className={styles.detail}>
          <div className={styles.distance}>
            <Icon iconName="distance" className={styles.detailIcon} /> <span>{route.length} км</span>
          </div>
          <Icon className={styles.iconDelimiter} iconName="delimiter" />
          <div className={cnDifficulty}>
            <Icon iconName="difficulty" className={styles.detailIcon} /> {route.complexity.name}
          </div>
        </div>
        <div>
          <Link to={'/route/'+route.id.toString()} tabIndex={-1}><Button className={styles.button}>Подробнее</Button></Link>
        </div>
      </div>
    </div>
  )
}