import styles from './ViewRouteList.module.css'
import RouteItem from "./components/RouteItem/RouteItem";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {IRouteListParam, useLazyGetRouteListQuery} from "../../store/services/routeApi";
import React, {useEffect, useMemo, useState} from "react";
import CardItem from "../../components/CardItem/CardItem";
import CardList from "../../components/CardList/CardList";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import {routeDefault} from "../../constants";
import Pagination from "../../components/Pagination/Pagination";
import SortPanel from "../../components/SortPanel/SortPanel";

const sortList = [
  {value: 'name', label: 'по возрастанию названия'},
  {value: 'name:desc', label: 'по убыванию названия'},
  {value: 'length', label: 'по возрастанию протяженности'},
  {value: 'length:desc', label: 'по убыванию протяженности'},
  {value: 'dateCreate', label: 'сначала созданные раньше'},
  {value: 'dateCreate:desc', label: 'сначала созданные позже'},
  {value: 'dateUpdate', label: 'сначала обновленные раньше'},
  {value: 'dateUpdate:desc', label: 'сначала обновленные позже'},
]

export default function ViewRouteList() {


  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [getRouteList, {data }] = useLazyGetRouteListQuery()
  const [complexityList, setComplexityList] = useState<{value: number, label: string}[]>([{value: 0, label:'Все'}])
  const param: IRouteListParam = useMemo<IRouteListParam>(() => ({
    page: parseInt(searchParams.get('page') || '1'),
    limit: parseInt(searchParams.get('limit') || routeDefault.limit.toString()),
    search: searchParams.get('search') || '',
    length: searchParams.get('length') || '',
    complexity: parseInt(searchParams.get('complexity') || '0'),
    sort: searchParams.get('sort') || routeDefault.sort,
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
    if (param.complexity !== 0) {
      urlParam.append('complexity', param.complexity)
    }
    if (param.sort !== routeDefault.sort) {
      urlParam.append('sort', param.sort)
    }
    navigate(`/routes?${urlParam}`)
  }

  function handleApplySearch(search: string, lengthFrom: number, lengthTo: number, complexity: number): void {
    const urlParam: Record<string, any> = new URLSearchParams()
    if (param.limit !== routeDefault.limit) {
      urlParam.append('limit', param.limit)
    }
    if (search !== '') {
      urlParam.append('search', search)
    }
    if (lengthFrom + lengthTo !== 0) {
      urlParam.append('length', `${lengthFrom},${lengthTo}`)
    }
    if (complexity !== 0) {
      urlParam.append('complexity', complexity)
    }
    if (param.sort !== routeDefault.sort) {
      urlParam.append('sort', param.sort)
    }
    navigate(`/routes?${urlParam}`)

  }

  function handleApplySort(sort: string) {
    const urlParam: Record<string, any> = new URLSearchParams()
    if (param.page !== 1) {
      urlParam.append('page', param.page)
    }
    if (param.limit !== routeDefault.limit) {
      urlParam.append('limit', param.limit)
    }
    if (param.search !== '') {
      urlParam.append('search', param.search)
    }
    if (param.length !== '') {
      urlParam.append('length', param.length)
    }
    if (param.complexity !== 0) {
      urlParam.append('complexity', param.complexity)
    }
    if (sort !== routeDefault.sort) {
      urlParam.append('sort', sort)
    }
    navigate(`/routes?${urlParam}`)
  }

  useEffect(() => {
    getRouteList(param)
  }, [getRouteList, param])

  useEffect(() => {
    const cl = [
      {value: 0, label: 'Все'},
      {value: 1, label: 'Легкий'},
      {value: 2, label: 'Средний'},
      {value: 3, label: 'Сложный'},
    ]
    setComplexityList(cl)
  }, [])

  if (!data) {
    return null;
  }
  const lengthFrom = parseInt(param.length?.split(',')[0] || '0')
  const lengthTo = parseInt(param.length?.split(',')[1] || '0')

  if (param.limit && ((data.recCount !== 0) ? Math.ceil(data.recCount/param.limit) : 1) < (param.page || 1)) {
    handleChangePage((data.recCount !== 0) ? Math.ceil(data.recCount/param.limit) : 1, param.limit)
  }

  return (
    <div className={styles.viewRouteList}>
      <Link to={"/"}><button className={styles.button}>На главную</button></Link>
      <div className={styles.title}>Список маршрутов</div>
      <div className={styles.routeList}>
        <div className={styles.routeParam}>
          <SortPanel options={sortList} value={param.sort} onApply={handleApplySort}/>
          <SearchPanel className={styles.searchPanel} fields={['search','length', 'complexity']} search={param.search} lengthFrom={lengthFrom} lengthTo={lengthTo} complexityList={complexityList} complexity={param.complexity} onApply={handleApplySearch}/>
        </div>
        <div>
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
        </div>
      </div>
      <Link to={"/"}><button className={styles.button}>На главную</button></Link>
    </div>
  )
}