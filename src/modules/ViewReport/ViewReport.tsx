import styles from './ViewReport.module.css'
import cn from 'classnames'
import {useParams} from "react-router";
import {useSearchParams} from "react-router-dom";
import {useLazyGetReportQuery, useToggleReportLikeMutation} from "../../store/services/reportApi";
import Content from "../../components/Content/Content";
import ReportHeader from "./components/ReportHeader/ReportHeader";
import dayjs from "dayjs";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import Icon from "../../components/Icon/Icon";
import {useAuth} from "../../context/AuthContext";
import {useEffect} from "react";

export default function ViewReport() {

  const {isAuthenticated} = useAuth()
  const {id} = useParams()
  const [searchParams] = useSearchParams()
  const reportId: number = Number(id)

  const code = searchParams.get('code') || ''
  const [getReport ,{data: report, isLoading}] = useLazyGetReportQuery()
  const [toggleReportLike] = useToggleReportLikeMutation()

  function handleToggleReportLike() {
    if (isAuthenticated) {
      toggleReportLike(reportId)
    }
  }

  useEffect(() => {
    getReport({reportId, code})
  }, [getReport, isAuthenticated, reportId, code])

  if (isLoading) {
    return (<div>Загрузка</div>)
  }

  if (!report) {
    return (
      <div>Отчет не найден</div>
    )
  }

  const cnLikeIcon = cn(styles.likeIcon, {[styles.likeSelected]: report.like})

  return (
    <div className={styles.viewReport}>
      <div className={styles.backLine}>
        <ButtonBack />
        <div className={styles.like} onClick={handleToggleReportLike}>
          <Icon className={cnLikeIcon} iconName="like" /><div className={styles.likeText}>{report.likesCount}</div>
        </div>
      </div>
        <div className={styles.title}>{report.name}</div>
      <div className={styles.dateRide}>Дата поездки: {dayjs(report.date).format('DD.MM.YYYY')}</div>
      <div className={styles.header}>
        <ReportHeader className={styles.header} route={report.route} event={report.event} />
      </div>
      <Content title="Отчет" body={report.body} />
      <div className={styles.footer}>
        <ReportHeader route={report.route} event={report.event} />
      </div>
    </div>
  )
}