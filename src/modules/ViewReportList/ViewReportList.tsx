import styles from './ViewReportList.module.css'
import cn from "classnames"
import {useNavigate, useSearchParams} from "react-router-dom";
import {IReportListParam, useLazyGetReportListQuery} from "../../store/services/reportApi";
import React, {useEffect, useMemo} from "react";
import CardList from "../../components/CardList/CardList";
import Pagination from "../../components/Pagination/Pagination";
import {reportDefault} from "../../constants";
import SortPanel from "../../components/SortPanel/SortPanel";
import SearchPanel, {IOnApplySearch} from "../../components/SearchPanel/SearchPanel";
import ReportCard from '../../components/ReportCard/ReportCard';
import Icon from "../../components/Icon/Icon";
import FormModal from "../../components/FormModal/FormModal";

const sortList = [
  {value: 'name', label: 'по возрастанию названия'},
  {value: 'name:desc', label: 'по убыванию названия'},
  {value: 'date', label: 'по возрастанию даты поездки'},
  {value: 'date:desc', label: 'по убыванию даты поездки'},
  {value: 'dateCreate:desc', label: 'сначала новые'},
  {value: 'dateCreate', label: 'сначала старые'},
]

export default function ViewReportList() {

  const [showFilter, setShowFilter] = React.useState(false);
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
    if (param.page !== 1) {
      urlParam.append('page', param.page)
    }
    if (param.limit !== reportDefault.limit) {
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
    if (param.limit !== reportDefault.limit) {
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

  function handleClickButtonFilter() {
    setShowFilter(!showFilter)
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

  const cnReportFilter = cn(styles.reportFilter, {[styles.showFilter]: showFilter})

  if (param.limit && ((data.recCount !== 0) ? Math.ceil(data.recCount/param.limit) : 1) < (param.page || 1)) {
    handleChangePage((data.recCount !== 0) ? Math.ceil(data.recCount/param.limit) : 1, param.limit)
  }

  return (
    <div className={styles.viewReportList}>
      <div className={styles.title}>
        <div className={styles.maintitle}><span>Отчеты</span><div onClick={handleClickButtonFilter}><Icon className={styles.buttonFilter} iconName="filter" /></div></div>
        <div className={styles.subtitle}>Находите и выбирайте лучшие веломаршруты для новых приключений</div>
      </div>
      {(showFilter) ? <FormModal onClick={()=>setShowFilter(false)} /> : null}
      <div className={cnReportFilter}>
        <SortPanel options={sortList} value={param.sort} onApply={handleApplySort}/>
        <SearchPanel fields={['search']} search={param.search} onApply={handleApplySearch}/>
      </div>
      <div className={styles.reportList}>
        <div>
          <CardList>
          {data!.reportList.map((report, idx) => (
            <ReportCard key={idx} report={report} showViews={param.showCount !== ''} />
          ))}
        </CardList>
        <Pagination current={param.page} pageSize={param.limit} total={data.recCount} hideOnSinglePage={true} onChange={handleChangePage} />
        </div>
      </div>
    </div>
  )
}