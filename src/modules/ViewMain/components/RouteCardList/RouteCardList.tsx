import styles from "./RouteCardList.module.css"
import Icon from "../../../../components/Icon/Icon";
import {Link} from "react-router-dom";
import {useLazyGetRouteRandomQuery} from "../../../../store/services/routeApi";
import RouteCard from "../../../../components/RouteCard/RouteCard";
import {useEffect} from "react";
import {useAuth} from "../../../../context/AuthContext";

export default function RouteCardList() {
  const {isAuthenticated} = useAuth()
  const [getRouteRandom ,{data, isLoading}] = useLazyGetRouteRandomQuery()

  useEffect(() => {
    getRouteRandom(null)
  }, [getRouteRandom, isAuthenticated])
  return (
    <div className={styles.routeCardList}>
      <div className={styles.info}>
        <div className={styles.infoTitle}>
          <Icon iconName="route" className={styles.infoTitleIcon}/> Маршруты
        </div>
        <div className={styles.infoMoreButton}>
          <Link to="/routes" className={styles.infoMoreButton}>Смотреть все маршруты<Icon iconName="arrowRight" className={styles.infoMoreButtonIcon}/></Link>
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