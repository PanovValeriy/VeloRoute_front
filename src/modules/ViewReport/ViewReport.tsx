import styles from './ViewReport.module.css'
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {useGetReportQuery} from "../../store/services/reportApi";

function createContent(body: string) {
  const bodyArr = body.split('\n')
  let result = []
  let key = 0
  function getKey() {
    return `rc_${++key}`
  }
  for (const p of bodyArr) {
    let pStart = 0
    while (p.indexOf('[IMG]', pStart) !== -1) {
      const imgStart = p.indexOf('[IMG]', pStart)
      const imgEnd = p.indexOf('[/IMG]', imgStart)
      result.push(
        <p className={styles.paragraph} key={getKey()}>
          {p.slice(0, imgStart)}
        </p>
      )
      result.push(
        <img
          className={styles.photo}
          key={getKey()}
          src={p.slice(imgStart + 5, imgEnd)}
          alt="Фото"
        />
      )
      pStart = imgEnd + 6
    }
    result.push(
      <p className={styles.paragraph} key={getKey()}>
        {p.slice(pStart, p.length)}
      </p>
    )
  }
  return result
}


export default function ViewReport() {
  const {id} = useParams()
  const reportId: number = Number(id)

  const {data: report} = useGetReportQuery(reportId)

  if (!report) {
    return (
      <div>Report not found</div>
    )
  }

  return (
    <div className={styles.viewReport}>
      <Link to={"/reports"}><button className={styles.button}>К списку отчетов</button></Link>
      <div className={styles.title}>{report.name}</div>
      <div className={styles.body}>{createContent(report.body)}</div>
      <Link to={"/reports"}><button className={styles.button}>К списку отчетов</button></Link>
    </div>
  )
}