import styles from './ViewEventList.module.css'
import EventItem from "./components/EventItem/EventItem";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {IEventListParams, useLazyGetEventListQuery} from "../../store/services/eventApi";
import React, {useEffect, useMemo} from "react";
import CardItem from "../../components/CardItem/CardItem";
import cn from "classnames";
import dayjs from "dayjs";
import CardList from "../../components/CardList/CardList";
import {eventDefault} from "../../constants";
import Pagination from "../../components/Pagination/Pagination";
import SortPanel from "../../components/SortPanel/SortPanel";
import SearchPanel, {IOnApplySearch} from "../../components/SearchPanel/SearchPanel";

const sortList = [
  {value: 'name', label: 'по возрастанию названия'},
  {value: 'name:desc', label: 'по убыванию названия'},
  {value: 'startDateTime', label: 'по возрастанию даты старта'},
  {value: 'startDateTime:desc', label: 'по убыванию даты старта'},
  {value: 'dateCreate', label: 'сначала созданные раньше'},
  {value: 'dateCreate:desc', label: 'сначала созданные позже'},
  {value: 'dateUpdate', label: 'сначала обновленные раньше'},
  {value: 'dateUpdate:desc', label: 'сначала обновленные позже'},
]

export default function ViewEventList() {

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [getEventList, {data, isLoading}] = useLazyGetEventListQuery()

  const param: IEventListParams = useMemo<IEventListParams>(() => ({
    page: parseInt(searchParams.get('page') || '1'),
    limit: parseInt(searchParams.get('limit') || eventDefault.limit.toString()),
    search: searchParams.get('search') || '',
    hideArchive: searchParams.get('hideArchive' || '') === 'true',
    sort: searchParams.get('sort') || eventDefault.sort,
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
    if (param.hideArchive) {
      urlParam.append('hideArchive', 'true')
    }
    navigate(`/events?${urlParam}`)
  }

  function handleApplySearch({search='', hideArchive=false}: IOnApplySearch) {
    const urlParam: Record<string, any> = new URLSearchParams()
    if (param.limit !== eventDefault.limit) {
      urlParam.append('limit', param.limit)
    }
    if (search !== '') {
      urlParam.append('search', search)
    }
    if (hideArchive) {
      urlParam.append('hideArchive', 'true')
    }
    navigate(`/events?${urlParam}`)
  }

  function handleApplySort(sort: string) {
    const urlParam: Record<string, any> = new URLSearchParams()
    if (param.page !== 1) {
      urlParam.append('page', param.page)
    }
    if (param.limit !== eventDefault.limit) {
      urlParam.append('limit', param.limit)
    }
    if (param.search !== '') {
      urlParam.append('search', param.search)
    }
    if (param.hideArchive !== false) {
      urlParam.append('hideArchive', param.hideArchive)
    }
    if (sort !== eventDefault.sort) {
      urlParam.append('sort', sort)
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

  if (param.limit && ((data.recCount !== 0) ? Math.ceil(data.recCount/param.limit) : 1) < (param.page || 1)) {
    handleChangePage((data.recCount !== 0) ? Math.ceil(data.recCount/param.limit) : 1, param.limit)
  }

  return (
    <div className={styles.viewEventList}>
      <Link to={"/"}><button className={styles.button}>На главную</button></Link>
      <div className={styles.title}>События</div>
      <div className={styles.eventList}>
        <div className={styles.eventParam}>
          <SortPanel options={sortList} value={param.sort} onApply={handleApplySort}/>
          <SearchPanel className={styles.searchPanel} fields={['search','hideArchive']} search={param.search} hideArchive={param.hideArchive} onApply={handleApplySearch}/>
        </div>
        <div>
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
        </div>
      </div>
      <Link to={"/"}><button className={styles.button}>На главную</button></Link>
    </div>
  )
}