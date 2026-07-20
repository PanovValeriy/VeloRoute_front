import styles from "./ReportCardList.module.css"
import Icon from "../../../../components/Icon/Icon";
import {Link} from "react-router-dom";
import {useGetReportRandomQuery} from "../../../../store/services/reportApi";
import ReportCard from "../../../../components/ReportCard/ReportCard";

export default function ReportCardList() {
  const {data, isLoading} = useGetReportRandomQuery(null)

  return (
    <div className={styles.reportCardList}>
      <div className={styles.info}>
        <div className={styles.infoTitle}>
          <Icon iconName="report" className={styles.infoTitleIcon}/> Отчеты
        </div>
        <div className={styles.infoMoreButton}>
          <Link to="/routes" className={styles.infoMoreButton}>Смотерть все отчеты<Icon iconName="arrowRight" className={styles.infoMoreButtonIcon}/></Link>
        </div>

      </div>
      <div className={styles.cards}>
        {(isLoading)
          ? "Загрузка"
          : (data?.reportList) ? data.reportList.map((report, idx) => (<ReportCard key={idx} report={report} />)) : "Отчетов нет"
        }
      </div>
    </div>
  )
}