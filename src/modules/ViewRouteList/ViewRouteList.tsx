import styles from './ViewRouteList.module.css'
import RouteItem from "./components/RouteItem/RouteItem";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {IRouteListParam, useLazyGetRouteListQuery} from "../../store/services/routeApi";
import {useEffect, useMemo} from "react";
import CardItem from "../../components/CardItem/CardItem";
import CardList from "../../components/CardList/CardList";
// import SearchPanel from "./components/SearchPanel/SearchPanel";
import {routeDefault} from "../../constants";
import Pagination from "../../components/Pagination/Pagination";

export default function ViewRouteList() {

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [getRouteList, {data }] = useLazyGetRouteListQuery()
  const param: IRouteListParam = useMemo<IRouteListParam>(() => ({
    page: parseInt(searchParams.get('page') || '1'),
    limit: parseInt(searchParams.get('limit') || routeDefault.limit.toString()),
    search: searchParams.get('search') || '',
    length: searchParams.get('length') || ''
  }),[searchParams])

  function handleChangePage(page: number, pageSize: number) {
    const urlParam: Record<string, any> = new URLSearchParams()
    if (page !== 1 && pageSize === param.limit) {
      urlParam.append('page', page)
    }
    if (pageSize !== routeDefault.limit) {
      urlParam.append('limit', pageSize)
    }
    if (param.search !== '') {
      urlParam.append('search', param.search)
    }
    if (param.length !== '') {
      urlParam.append('length', param.length)
    }
    navigate(`/routes?${urlParam}`)
  }

  function handleApplySearch(search: string, lengthFrom: number, lengthTo: number): void {
    const urlParam: Record<string, any> = new URLSearchParams()
    if (param.limit !== 0) {
      urlParam.append('limit', param.limit)
    }
    if (search !== '') {
      urlParam.append('search', search)
    }
    if (lengthFrom + lengthTo !== 0) {
      urlParam.append('length', `${lengthFrom},${lengthTo}`)
    }
    navigate(`/routes?${urlParam}`)

  }

  useEffect(() => {
    getRouteList(param)
  }, [getRouteList, param])

  if (!data) {
    return null;
  }
  const lengthFrom = parseInt(param.length?.split(',')[0] || '0')
  const lengthTo = parseInt(param.length?.split(',')[1] || '0')
  if (param.limit && Math.ceil(data.recCount/param.limit) < (param.page || 1)) {
    handleChangePage(Math.ceil(data.recCount/param.limit), param.limit)
  }

  return (
    <div className={styles.viewRouteList}>
      <Link to={"/"}><button className={styles.button}>На главную</button></Link>
      {/*<SearchPanel search={param.search} lengthFrom={lengthFrom} lengthTo={lengthTo} onApply={handleApplySearch}/>*/}
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
        <Pagination className={styles.pagination} current={param.page} pageSize={param.limit} total={data.recCount} hideOnSinglePage={true} onChange={handleChangePage} />
       <Link to={"/"}><button className={styles.button}>На главную</button></Link>
    </div>
  )
}