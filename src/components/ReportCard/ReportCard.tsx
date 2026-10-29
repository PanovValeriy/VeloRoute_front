import { Link } from "react-router";
import { IReportShort } from "../../types/types";
import styles from "./ReportCard.module.css"
import Button from "../Button/Button";
import dayjs from "dayjs";
import Icon from "../Icon/Icon";
import ViewCount from "../ViewCount/ViewCount";
import LikeCount from "../LikeCount/LikeCount";

interface IProps {
  className?: string;
  report: IReportShort;
  showViews?: boolean;
  showLikes?: boolean;
}

export default function ReportCard({className, report, showViews=false, showLikes=true}: IProps) {
  return (
    <div className={styles.reportCard}>
      <div className={styles.photo}>
        <img src={report.photoURL} alt="Фото" />
        {showViews ? <ViewCount className={styles.viewCount} count={report.viewsCount} /> : null}
        {showLikes ? <LikeCount className={styles.likeCount} count={report.likesCount} selected={report.like} /> : null}
      </div>
      <div className={styles.info}>
        <div className={styles.description}>
          <div className={styles.title}>{report.name}</div>
          <div className={styles.date}><Icon className={styles.dateIcon} iconName="calendar" />{dayjs(report.date).format('MM.DD.YYYY')}</div>
        </div>
        <div className={styles.buttonMore}><Link tabIndex={-1} to={'/report/'+report.id.toString()}><Button>Подробнее</Button></Link></div>
      </div>
    </div>
  )
}