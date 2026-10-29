import styles from "./ReportCardList.module.css"
import Icon from "../../../../components/Icon/Icon";
import {Link} from "react-router-dom";
import {useLazyGetReportRandomQuery} from "../../../../store/services/reportApi";
import ReportCard from "../../../../components/ReportCard/ReportCard";
import {useAuth} from "../../../../context/AuthContext";
import {useEffect} from "react";

export default function ReportCardList() {
  const {isAuthenticated} = useAuth()
  const [getReportRandom, {data, isLoading}] = useLazyGetReportRandomQuery()

  useEffect(() => {
    getReportRandom(null)
  }, [getReportRandom, isAuthenticated])

  return (
    <div className={styles.reportCardList}>
      <div className={styles.info}>
        <div className={styles.infoTitle}>
          <Icon iconName="report" className={styles.infoTitleIcon}/> Отчеты
        </div>
        <div className={styles.infoMoreButton}>
          <Link to="/reports" className={styles.infoMoreButton}>Смотреть все отчеты<Icon iconName="arrowRight" className={styles.infoMoreButtonIcon}/></Link>
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