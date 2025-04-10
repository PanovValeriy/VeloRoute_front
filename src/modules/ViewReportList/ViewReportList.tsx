import styles from './ViewReportList.module.css'
import ReportItem from "./components/ReportItem/ReportItem";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {IReportListParam, useLazyGetReportListQuery} from "../../store/services/reportApi";
import {useEffect, useMemo} from "react";
import CardItem from "../../components/CardItem/CardItem";
import CardList from "../../components/CardList/CardList";
import Pagination from "../../components/Pagination/Pagination";
import {reportDefault} from "../../constants";

export default function ViewReportList() {

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [getReportList,{data, isLoading}] = useLazyGetReportListQuery()
  const param: IReportListParam = useMemo<IReportListParam>(() => ({
    page: parseInt(searchParams.get('page') || '1'),
    limit: parseInt(searchParams.get('limit') || reportDefault.limit.toString()),
    search: searchParams.get('search') || '',
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

  if (param.limit && Math.ceil(data.recCount/param.limit) < (param.page || 1)) {
    handleChangePage(Math.ceil(data.recCount/param.limit), param.limit)
  }

  return (
    <div className={styles.viewReportList}>
      <Link to={"/"}><button className={styles.button}>На главную</button></Link>
      <div className={styles.title}>Отчеты</div>
      <CardList>
      {data!.reportList.map((report, idx) => (
        <Link key={idx} className={styles.linkItem} to={"/report/"+report.id}>
          <CardItem className={styles.reportItem}>
            <ReportItem report={report}/>
          </CardItem>
        </Link>
      ))}
      </CardList>
      <Pagination current={param.page} pageSize={param.limit} total={data.recCount} hideOnSinglePage={true} onChange={handleChangePage} />
      <Link to={"/"}><button className={styles.button}>На главную</button></Link>
    </div>
  )
}