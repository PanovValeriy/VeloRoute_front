import styles from './ViewReportList.module.css'
import ReportItem from "./components/ReportItem/ReportItem";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {IReportListParam, useLazyGetReportListQuery} from "../../store/services/reportApi";
import React, {useEffect, useMemo} from "react";
import CardItem from "../../components/CardItem/CardItem";
import CardList from "../../components/CardList/CardList";
import Pagination from "../../components/Pagination/Pagination";
import {reportDefault, routeDefault} from "../../constants";
import SortPanel from "../../components/SortPanel/SortPanel";
import SearchPanel, {IOnApplySearch} from "../../components/SearchPanel/SearchPanel";
import ViewsCount from '../../components/ViewsCount/ViewsCount';
import Button from '../../components/Button/Button';

const sortList = [
  {value: 'name', label: 'по возрастанию названия'},
  {value: 'name:desc', label: 'по убыванию названия'},
  {value: 'date', label: 'по возрастанию даты поездки'},
  {value: 'date:desc', label: 'по убыванию даты поездки'},
  {value: 'dateCreate:desc', label: 'сначала новые'},
  {value: 'dateCreate', label: 'сначала старые'},
]

export default function ViewReportList() {

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [getReportList,{data, isLoading}] = useLazyGetReportListQuery()
  const param: IReportListParam = useMemo<IReportListParam>(() => ({
    page: parseInt(searchParams.get('page') || '1'),
    limit: parseInt(searchParams.get('limit') || reportDefault.limit.toString()),
    search: searchParams.get('search') || '',
    sort: searchParams.get('sort') || reportDefault.sort,
    showCount: searchParams.get('showCount') || '',
  }),[searchParams])

  function handleChangePage(page: number, pageSize: number) {
    const urlParam: Record<string, any> = new URLSearchParams()
    if (page !== 1 && pageSize === param.limit) {
      urlParam.append('page', page)
    }
    if (pageSize !== reportDefault.limit) {
      urlParam.append('limit', pageSize)
    }
    if (param.search !== '') {
      urlParam.append('search', param.search)
    }
    if (param.sort !== reportDefault.sort) {
      urlParam.append('sort', param.sort)
    }
    if (param.showCount !== '') {
      urlParam.append('showCount', param.showCount)
    }
    navigate(`/reports?${urlParam}`)
  }

  function handleApplySearch({search= ''}: IOnApplySearch): void {
    const urlParam: Record<string, any> = new URLSearchParams()
    if (param.limit !== routeDefault.limit) {
      urlParam.append('limit', param.limit)
    }
    if (search !== '') {
      urlParam.append('search', search)
    }
    if (param.sort !== reportDefault.sort) {
      urlParam.append('sort', param.sort)
    }
    if (param.showCount !== '') {
      urlParam.append('showCount', param.showCount)
    }
    navigate(`/reports?${urlParam}`)
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
    if (sort !== reportDefault.sort) {
      urlParam.append('sort', sort)
    }
    if (param.showCount !== '') {
      urlParam.append('showCount', param.showCount)
    }
    navigate(`/reports?${urlParam}`)
  }


  useEffect(() => {
    getReportList(param)
  }, [getReportList, param])

  if (isLoading) {
    return (
      <div>Загрузка</div>
    )
  }

  if (!data) {
    return (<div>Отчеты отсутствуют</div>)
  }

  if (param.limit && ((data.recCount !== 0) ? Math.ceil(data.recCount/param.limit) : 1) < (param.page || 1)) {
    handleChangePage((data.recCount !== 0) ? Math.ceil(data.recCount/param.limit) : 1, param.limit)
  }

  return (
    <div className={styles.viewReportList}>
      <Link className={styles.linkItem} to={"/"}><Button className={styles.button}>На главную</Button></Link>
      <div className={styles.title}>Отчеты</div>
        <div className={styles.reportList}>
        <div className={styles.reportParam}>
          <SortPanel options={sortList} value={param.sort} onApply={handleApplySort}/>
          <SearchPanel className={styles.searchPanel} fields={['search']} search={param.search} onApply={handleApplySearch}/>
        </div>
        <div>
          <CardList>
          {data!.reportList.map((report, idx) => (
            <Link key={idx} className={styles.linkItem} to={"/report/"+report.id}>
              <CardItem className={styles.reportItem}>
                {param.showCount !== '' ? <ViewsCount className={styles.viewsCount} viewsCount={report.viewsCount} /> : null}
                <ReportItem report={report}/>
              </CardItem>
            </Link>
          ))}
          </CardList>
          <Pagination current={param.page} pageSize={param.limit} total={data.recCount} hideOnSinglePage={true} onChange={handleChangePage} />
        </div>
      </div>
      <Link className={styles.linkItem} to={"/"}><Button className={styles.button}>На главную</Button></Link>
    </div>
  )
}