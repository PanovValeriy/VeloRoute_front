import styles from './ViewRoute.module.css'
import {useParams} from "react-router";
import {useSearchParams} from "react-router-dom";
import RouteParams from "./components/RouteParams/RouteParams";
import {useGetRouteQuery} from "../../store/services/routeApi";
import Content from "../../components/Content/Content";
import {useGetReportListQuery} from "../../store/services/reportApi";
import React from "react";
import ReportList from "../../components/ReportList/ReportList";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import RouteParamsMobile from "./components/RouteParamsMobile/RouteParamsMobile";

export default function ViewRoute() {

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
      <div>Маршрут не найден</div>
    )
  }
  return (
    <div className={styles.viewRoute}>
      <ButtonBack />
      <div className={styles.params}>
        <div className={styles.paramsImageWrapper}>
          <img className={styles.paramsImage}
               src={route.photoURL}
               alt="image/Вариант 0.JPG"/>
        </div>
        <RouteParams className={styles.routeParams} route={route}/>
        <RouteParamsMobile className={styles.routeParams} route={route} />
      </div>
      <Content title="Описание маршрута" body={route.description} />
      {((dataReportList) && (dataReportList.recCount !== 0)) ? <ReportList title="Отчеты по маршруту" reportList = {dataReportList.reportList}/> : null}
    </div>
  )
}