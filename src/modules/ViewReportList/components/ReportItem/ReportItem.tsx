import styles from './ReportItem.module.css'
import cn from 'classnames'
import {IReportShort} from "../../../../types/types";
import dayjs from "dayjs";

interface IProps {
  classname?: string,
  report: IReportShort,
}

export default function ReportItem({classname, report}: IProps) {

  const cnReportItem = cn(styles.reportItem, classname)

  return (
    <div className={cnReportItem}>
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
    </div>
  )
}