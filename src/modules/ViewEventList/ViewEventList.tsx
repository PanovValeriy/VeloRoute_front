import styles from './ViewEventList.module.css'
import EventItem from "./components/EventItem/EventItem";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {useLazyGetEventListQuery} from "../../store/services/eventApi";
import {useEffect, useMemo} from "react";
import CardItem from "../../components/CardItem/CardItem";
import cn from "classnames";
import dayjs from "dayjs";
import CardList from "../../components/CardList/CardList";
import {IRouteListParam} from "../../store/services/routeApi";
import {eventDefault} from "../../constants";
import Pagination from "../../components/Pagination/Pagination";

export default function ViewEventList() {

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [getEventList, {data, isLoading}] = useLazyGetEventListQuery()

  const param: IRouteListParam = useMemo<IRouteListParam>(() => ({
    page: parseInt(searchParams.get('page') || '1'),
    limit: parseInt(searchParams.get('limit') || eventDefault.limit.toString()),
    search: searchParams.get('search') || '',
  }),[searchParams])

  function handleChangePage(page: number, pageSize: number) {
    const urlParam: Record<string, any> = new URLSearchParams()
    if (page !== 1 && pageSize === param.limit) {
      urlParam.append('page', page)
    }
    if (pageSize !== eventDefault.limit) {
      urlParam.append('limit', pageSize)
    }
    if (param.search !== '') {
      urlParam.append('search', param.search)
    }
    navigate(`/events?${urlParam}`)
  }

  useEffect(() => {
    getEventList(param)
  }, [getEventList, param])

  if (isLoading) {
    return (<div>Загрузка</div>)
  }

  if (!data) {
    return (<div>События отсутствуют</div>)
  }

  if (param.limit && Math.ceil(data.recCount/param.limit) < (param.page || 1)) {
    handleChangePage(Math.ceil(data.recCount/param.limit), param.limit)
  }


  return (
    <div className={styles.viewEventList}>
      <Link to={"/"}><button className={styles.button}>На главную</button></Link>
      <div className={styles.title}>События</div>
      <CardList>
        {data!.eventList.map((event, idx) => (
          <Link key={idx} className={styles.linkItem} to={"/event/"+event.id}>
            <CardItem className={cn(styles.eventItem, (dayjs(event.startDateTime) < dayjs(Date())) ? styles.eventItemHistory : null)}>
              <EventItem key={idx} event={event}/>
            </CardItem>
          </Link>
        ))}
      </CardList>
      <Pagination className={styles.pagination} current={param.page} pageSize={param.limit} total={data.recCount} hideOnSinglePage={true} onChange={handleChangePage} />
      <Link to={"/"}><button className={styles.button}>На главную</button></Link>
    </div>
  )
}