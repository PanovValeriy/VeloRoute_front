import { Link } from "react-router";
import { IRouteShort } from "../../types/types";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import styles from "./RouteCard.module.css";
import cn from "classnames";

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
      <div className={styles.foto}>
        <img src={route.photoURL} alt="Фото" />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          {route.name}
        </div>
        <div className={styles.details}>
          <div className={styles.distance}>
            <Icon iconName="distance" className={styles.detailIcon} /> {route.length}км
          </div>
          <Icon iconName="delimeter" />
          <div className={cnDifficulty}>
            <Icon iconName="difficulty" className={styles.detailIcon} /> {route.complexity.name}
          </div>
          {(showViews)
            ? (
              <>
                <Icon iconName="delimeter" />
                <div className={styles.views}>
                  <Icon iconName="views" className={styles.detailIcon} />{route.viewsCount}
                </div>
              </>)
            :null}
        </div>
        <div className={styles.buttonMore}>
          <Link to={'/route/'+route.id.toString()}><Button>Подробнее</Button></Link>
        </div>
      </div>
    </div>
  )
}