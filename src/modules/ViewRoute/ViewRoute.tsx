import styles from './ViewRoute.module.css'
import {useParams} from "react-router";
import {Link, useNavigate} from "react-router-dom";
import RouteParams from "./components/RouteParams/RouteParams";
import {useGetRouteQuery} from "../../store/services/routeApi";
import Content from "../../components/Content/Content";

export default function ViewRoute() {

  const navigate = useNavigate()
  const {id} = useParams();
  const routeId: number = Number(id);
  const {data: route, isLoading } = useGetRouteQuery(routeId)

  if (isLoading) {
    return (<div>Загрузка</div>)
  }

  if (!route) {
    return (
      <>
        <Link to={'/routes'}><button className={styles.button} onClick={() => navigate(-1)}>К списку маршрутов</button></Link>
        <div>Маршрут не найден</div>
      </>
    )
  }

  return (
    <div className={styles.viewRoute}>
      <div className={styles.title}>Маршрут "{route.name}"</div>
      <div className={styles.params}>
        <div className={styles.paramsImageWrapper}>
          <img className={styles.paramsImage}
               src={route.photoURL}
               alt="image/Вариант 0.JPG"/>
        </div>
        <RouteParams className={styles.routeParams} route={route}/>
      </div>
      <div className={styles.body}>
        <Content pStyles={styles} body={route.description} />
      </div>
      <button className={styles.button} onClick={() => navigate(-1)}>Назад</button>
    </div>
  )
}