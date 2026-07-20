import styles from "./RouteCardList.module.css"
import Icon from "../../../../components/Icon/Icon";
import {Link} from "react-router-dom";
import {useGetRouteRandomQuery} from "../../../../store/services/routeApi";
import RouteCard from "../../../../components/RouteCard/RouteCard";


export default function RouteCardList() {
  const {data, isLoading} = useGetRouteRandomQuery(null)
  return (
    <div className={styles.routeCardList}>
      <div className={styles.info}>
        <div className={styles.infoTitle}>
          <Icon iconName="route" className={styles.infoTitleIcon}/> Маршруты
        </div>
        <div className={styles.infoMoreButton}>
          <Link to="/routes" className={styles.infoMoreButton}>Смотерть все маршруты<Icon iconName="arrowRight" className={styles.infoMoreButtonIcon}/></Link>
        </div>

      </div>
      <div className={styles.cards}>
        {(isLoading)
          ? "Загрузка"
          : (data?.routeList) ? data.routeList.map((route, idx) => (<RouteCard key={idx} route={route} />)) : "Маршрутов нет"
          }
      </div>
    </div>
  )
}