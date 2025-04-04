import styles from './ViewRouteList.module.css'
import RouteItem from "./components/RouteItem/RouteItem";
import {Link, useSearchParams} from "react-router-dom";
import {IRouteListParam, useLazyGetRouteListQuery} from "../../store/services/routeApi";
import {useEffect, useMemo} from "react";
import CardItem from "../../components/CardItem/CardItem";
import CardList from "../../components/CardList/CardList";

export default function ViewRouteList() {

  const [searchParams] = useSearchParams()
  const [getRouteList, {data }] = useLazyGetRouteListQuery()
  const param: IRouteListParam = useMemo<IRouteListParam>(() => ({
    page: parseInt(searchParams.get('page') || '0'),
    limit: parseInt(searchParams.get('limit') || '0'),
    search: searchParams.get('search') || '',
    length: searchParams.get('length') || ''
  }),[searchParams])

  useEffect(() => {
    getRouteList({})
  }, [getRouteList, param])

  if (!data) {
    return null;
  }

  return (
    <div className={styles.viewRouteList}>
      <Link to={"/"}><button className={styles.button}>На главную</button></Link>
      <div className={styles.title}>Список маршрутов</div>
        <CardList>
          {data!.routeList.map((route, idx) => (
            <Link key={idx} className={styles.linkItem} to={"/route/"+route.id.toString()}>
              <CardItem className={styles.routeItem}>
                <RouteItem route={route} />
              </CardItem>
            </Link>
          ))}
        </CardList>
       <Link to={"/"}><button className={styles.button}>На главную</button></Link>
    </div>
  )
}