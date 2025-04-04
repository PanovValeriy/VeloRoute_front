import styles from './ReportItem.module.css'
import {IReportShort} from "../../../../types/types";
import dayjs from "dayjs";

interface IProps {
  report: IReportShort,
}

export default function ReportItem({report}: IProps) {

  return (
    <>
      <div className={styles.content}>
        <div className={styles.date}>
          Дата: {dayjs(report.date).format('DD.MM.YYYY')}
        </div>
        <div className={styles.title}>
          {report.name}
        </div>
      </div>
      <div className={styles.photoWrapper}>
        <img className={styles.photo} src={report.photoURL} alt=""/>
      </div>
    </>
  )
}