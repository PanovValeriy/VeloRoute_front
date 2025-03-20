import styles from './ViewRoute.module.css'
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import RouteParams from "./components/RouteParams/RouteParams";
import {useGetRouteQuery} from "../../store/services/routeApi";

function createContent(body: string) {
  const bodyArr = body.split('\n')
  let result = []
  let key = 0
  function getKey() {
    return `rc_${++key}`
  }
  for (const p of bodyArr) {
    let pStart = 0
    while (p.indexOf('[IMG]', pStart) !== -1 || p.indexOf('[MAP]', pStart) !== -1) {
      const imgStart = p.indexOf('[IMG]', pStart)
      const imgEnd = p.indexOf('[/IMG]', imgStart)
      const mapStart = p.indexOf('[MAP]', pStart)
      const mapEnd = p.indexOf('[/MAP]', mapStart)
      result.push(
        <p className={styles.paragraph} key={getKey()}>
          {p.slice(0, (imgStart+mapStart+1))}
        </p>
      )
      if (imgStart !== -1) {
        result.push(
          <img
            className={styles.photo}
            key={getKey()}
            src={p.slice(imgStart + 5, imgEnd)}
            alt="Фото"
          />
        )
        pStart = imgEnd + 6
      }
      if (mapStart !== -1) {
        result.push(
          <iframe
            title={getKey()}
            className={styles.map}
            key={getKey()}
            src={p.slice(mapStart + 5, mapEnd)} ></iframe>

        )
        pStart = mapEnd + 6
      }
    }
    result.push(
      <p className={styles.paragraph} key={getKey()}>
        {p.slice(pStart, p.length)}
      </p>
    )
  }
  return result
}

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
        <div className={styles.body}>{createContent(route.description)}</div>
      <Link to={"/routes"}><button className={styles.button}>К списку маршрутов</button></Link>
    </div>
  )
}