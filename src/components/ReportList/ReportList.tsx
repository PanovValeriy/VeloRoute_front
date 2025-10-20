import styles from './ReportList.module.css'
import {IReportShort} from "../../types/types";
import dayjs from "dayjs";
import cn from "classnames";

interface IProps {
  className?: string,
  reportList: IReportShort[],
}


function drawItem(report: IReportShort | null) {
  var result = null
  if (report === null) {
    result = (
      <div className={styles.header}>
        <div className={styles.colPhoto}>Фото</div>
        <div className={styles.colDate}>Дата</div>
        <div className={styles.colName}>Название</div>
      </div>
    )
  } else {
    result = (
      <a href={"/report/" + report.id} className={styles.row} key={report.id}>
        <div className={styles.colPhoto}><div className={styles.photoWrapper}><img className={styles.photo} src={report.photoURL} alt="" /></div></div>
        <div className={styles.colDate}>{dayjs(report.date).format( 'DD.MM.YYYY')}</div>
        <div className={styles.colName}>{report.name}</div>
      </a>
    )
  }
  return result
}


export default function ReportList({className, reportList}: IProps) {

  const title = 'Список отчетов по ' + ((className === styles.fromEvent) ? 'событию' : 'маршруту')

  return (
    <div className={cn(className, styles.reportList)}>
      <div className={styles.title}>{title}</div>
      <div className={styles.table}>
        {drawItem(null)}
        {reportList.map((item: IReportShort) => (drawItem(item)))}
      </div>
    </div>
  )
}