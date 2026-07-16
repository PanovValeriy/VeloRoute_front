import { Link } from "react-router";
import { IReportShort } from "../../types/types";
import styles from "./ReportCard.module.css"
import Button from "../Button/Button";
import dayjs from "dayjs";
import Icon from "../Icon/Icon";

interface IProps {
  className?: string;
  report: IReportShort;
  showViews?: boolean;
}

export default function ReportCard({className, report, showViews}: IProps) {
  return (
    <div className={styles.reportCard}>
      <div className={styles.photo}>
        <img src={report.photoURL} alt="Фото" />
      </div>
      <div className={styles.info}>
        <div className={styles.description}>
          <div className={styles.title}>{report.name}</div>
          <div className={styles.date}><Icon iconName="calendar" className={styles.dateIcon} />{dayjs(report.date).format('MM.DD.YYYY')}</div>
        </div>
        <div className={styles.buttonMore}><Link to={'/report/'+report.id.toString()}><Button>Подробнее</Button></Link></div>
      </div>
    </div>
  )
}