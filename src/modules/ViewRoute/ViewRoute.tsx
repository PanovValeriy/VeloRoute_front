import styles from './ViewRoute.module.css'
import stylesReportList from '../../components/ReportList/ReportList.module.css'
import {NavigateFunction, useParams} from "react-router";
import {useNavigate, useSearchParams} from "react-router-dom";
import RouteParams from "./components/RouteParams/RouteParams";
import {useGetRouteQuery} from "../../store/services/routeApi";
import Content from "../../components/Content/Content";
import {useGetReportListQuery} from "../../store/services/reportApi";
import ReportList from "../../components/ReportList/ReportList";
import Button from "../../components/Button/Button";
import DateCreateUpdate from "../../components/DateCreateUpdate/DateCreateUpdate";
import CardList from "../../components/CardList/CardList";
import ReportCard from "../../components/ReportCard/ReportCard";
import React from "react";

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
        <Button className={styles.button} onClick={() => navigate(-1)}>Назад</Button>
        <div>Маршрут не найден</div>
      </>
    )
  }
  return (
    <div className={styles.viewRoute}>
      {/*<Button className={styles.button} onClick={() => navigate(-1)}>Назад</Button>*/}
      <DateCreateUpdate className={styles.dateCreateUpdate} dateCreate={route.dateCreate} dateUpdate={route.dateUpdate} />
      <div className={styles.params}>
        <div className={styles.paramsImageWrapper}>
          <img className={styles.paramsImage}
               src={route.photoURL}
               alt="image/Вариант 0.JPG"/>
        </div>
        <RouteParams className={styles.routeParams} route={route}/>
      </div>
      <div className={styles.body}>
        <div className={styles.title}>Описание маршрута</div>
        <Content pStyles={styles} body={route.description} />
      </div>
      {((dataReportList) && (dataReportList.recCount !== 0))
        ? <>

          <div className={styles.listReportTitle}>Отчеты по маршруту</div>
          <CardList>
            {dataReportList!.reportList.map((report, idx) => (
              <ReportCard key={idx} report={report} showViews={false} />
            ))}
          </CardList>
        </>
        : null}
      {/*<Button className={styles.button} onClick={() => navigate(-1)}>Назад</Button>*/}
    </div>
  )
}