import styles from './ViewRoute.module.css'
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import RouteParams from "./components/RouteParams/RouteParams";
import {useGetRouteQuery} from "../../store/services/routeApi";
import Content from "../../components/Content/Content";

export default function ViewRoute() {

  const {id} = useParams();
  const routeId: number = Number(id);
  const {data: route } = useGetRouteQuery(routeId)

  if (!route) {
    return (<div>Загрузка</div>)
  }

  return (
    <div className={styles.viewRoute}>
      <Link to={"/routes"}><button className={styles.button}>К списку маршрутов</button></Link>
      <div className={styles.title}>{route.name}</div>
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
      <Link to={"/routes"}><button className={styles.button}>К списку маршрутов</button></Link>
    </div>
  )
}