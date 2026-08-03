import styles from './ViewEventList.module.css'
import cn from "classnames"
import {useNavigate, useSearchParams} from "react-router-dom";
import {IEventListParams, useLazyGetEventListQuery} from "../../store/services/eventApi";
import React, {useEffect, useMemo} from "react";
import CardList from "../../components/CardList/CardList";
import {eventDefault} from "../../constants";
import Pagination from "../../components/Pagination/Pagination";
import SortPanel from "../../components/SortPanel/SortPanel";
import SearchPanel, {IOnApplySearch} from "../../components/SearchPanel/SearchPanel";
import EventCard from '../../components/EventCard/EventCard';
import Icon from "../../components/Icon/Icon";
import FormModal from "../../components/FormModal/FormModal";

const sortList = [
  {value: 'name', label: 'по возрастанию названия'},
  {value: 'name:desc', label: 'по убыванию названия'},
  {value: 'startDateTime', label: 'по возрастанию даты старта'},
  {value: 'startDateTime:desc', label: 'по убыванию даты старта'},
  {value: 'dateCreate:desc', label: 'сначала новые'},
  {value: 'dateCreate', label: 'сначала старые'},
]

export default function ViewEventList() {

  const [showFilter, setShowFilter] = React.useState(false);
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [getEventList, {data, isLoading}] = useLazyGetEventListQuery()

  const param: IEventListParams = useMemo<IEventListParams>(() => ({
    page: parseInt(searchParams.get('page') || '1'),
    limit: parseInt(searchParams.get('limit') || eventDefault.limit.toString()),
    search: searchParams.get('search') || '',
    hideArchive: searchParams.get('hideArchive') === 'true',
    sort: searchParams.get('sort') || eventDefault.sort,
    showCount: searchParams.get('showCount') || '',
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
    if (param.showCount) {
      urlParam.append('showCount', param.showCount)
    }
    if (param.sort !== eventDefault.sort) {
      urlParam.append('sort', param.sort)
    }
    navigate(`/events?${urlParam}`)
  }

  function handleApplySearch({search='', hideArchive=false}: IOnApplySearch) {
    const urlParam: Record<string, any> = new URLSearchParams()
    if (param.page !== 1) {
      urlParam.append('page', param.page)
    }
    if (param.limit !== eventDefault.limit) {
      urlParam.append('limit', param.limit)
    }
    if (search !== '') {
      urlParam.append('search', search)
    }
    if (hideArchive) {
      urlParam.append('hideArchive', 'true')
    }
    if (param.showCount) {
      urlParam.append('showCount', param.showCount)
    }
    if (param.sort !== eventDefault.sort) {
      urlParam.append('sort', param.sort)
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
    if (param.showCount) {
      urlParam.append('showCount', param.showCount)
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

  const cnEventFilter = cn(styles.eventFilter, {[styles.showFilter]: showFilter})

  if (param.limit && ((data.recCount !== 0) ? Math.ceil(data.recCount/param.limit) : 1) < (param.page || 1)) {
    handleChangePage((data.recCount !== 0) ? Math.ceil(data.recCount/param.limit) : 1, param.limit)
  }

  return (
    <div className={styles.viewEventList}>
      <div className={styles.title}>
        <div className={styles.maintitle}><span>События</span><div onClick={() => setShowFilter(true)}><Icon className={styles.buttonFilter} iconName="filter" /></div></div>
        <div className={styles.subtitle}>Находите и выбирайте интересные мероприятия для активного отдыха</div>
      </div>
      {(showFilter) ? <FormModal onClick={()=>setShowFilter(false)} /> : null}
      <div className={cnEventFilter}>
        <SortPanel options={sortList} value={param.sort} onApply={handleApplySort}/>
        <SearchPanel fields={['search','hideArchive']} search={param.search} hideArchive={param.hideArchive} onApply={handleApplySearch} onClose={() => setShowFilter(false)}/>
      </div>
      <div className={styles.eventList}>
        <div>
          <CardList>
            {data!.eventList.map((event, idx) => (
              <EventCard key={idx} event={event} showViews={param.showCount !== ''} />
            ))}
          </CardList>
          <Pagination current={param.page} pageSize={param.limit} total={data.recCount} hideOnSinglePage={true} onChange={handleChangePage} />
        </div>
      </div>
    </div>
  )
}