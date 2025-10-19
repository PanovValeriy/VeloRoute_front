import styles from './ViewRoute.module.css'
import {NavigateFunction, useParams} from "react-router";
import {useNavigate, useSearchParams} from "react-router-dom";
import RouteParams from "./components/RouteParams/RouteParams";
import {useGetRouteQuery} from "../../store/services/routeApi";
import Content from "../../components/Content/Content";
import ReportList from "./components/ReportList/ReportList";
import {useGetReportListQuery} from "../../store/services/reportApi";

export default function ViewRoute() {

  const navigate : NavigateFunction = useNavigate()
  const {id} = useParams();
  const [searchParams] = useSearchParams()
  const code : string = searchParams.get('code') || ''
  const routeId: number = Number(id)
  const {data: route, isLoading: isLoadingRoute } = useGetRouteQuery({routeId, code})
  const {data: dataReportList} = useGetReportListQuery({sort: 'date:desc', routeId})

  if (isLoadingRoute) {
    return (<div>Загрузка</div>)
  }

  if (!route) {
    return (
      <>
        <button className={styles.button} onClick={() => navigate(-1)}>Назад</button>
        <div>Маршрут не найден</div>
      </>
    )
  }

  return (
    <div className={styles.viewRoute}>
      <button className={styles.button} onClick={() => navigate(-1)}>Назад</button>
      <div className={styles.title}>Маршрут "{route.name}"</div>
      <div className={styles.params}>
        <div className={styles.paramsImageWrapper}>
          <img className={styles.paramsImage}
               src={route.photoURL}
               alt="image/Вариант 0.JPG"/>
        </div>
        <RouteParams className={styles.routeParams} route={route}/>
      </div>
      <div className={styles.body}>
        <Content pStyles={styles} body={route.description} />
      </div>
      {((dataReportList) && (dataReportList.recCount !== 0)) ? <ReportList reportList = {dataReportList.reportList}/> : null}
      <button className={styles.button} onClick={() => navigate(-1)}>Назад</button>
    </div>
  )
}