import styles from "./NewsPanel.module.css"
import cn from "classnames"
import {useGetNewsListQuery} from "../../store/services/newsApi";
import NewsItem from "./components/NewsItem/NewsItem";

interface IProps {
  className?: string;
}


export default function NewsPanel({className}: IProps) {
  const cnNewsPanel = cn(styles.newsPanel, className)
  const {data, isLoading} = useGetNewsListQuery({count: 5, operation: 1, showEventArchive: false})

  if (isLoading) {
    return (
      <div className={cnNewsPanel}>Загрузка</div>
    )
  }

  if (!data || data.recCount === 0) {
    return (
      <div className={cnNewsPanel}>Нет данных</div>
    )
  }

  return (
    <div className={cnNewsPanel}>
      <div className={styles.title}>Последние изменения:</div>
      {data?.newsList.map((item, idx) => (
        <NewsItem key={idx} news={item} />
      ))}
    </div>
  )
}