import styles from "./NewsItem.module.css"
import cn from "classnames"
import {INews} from "../../../../types/types";
import dayjs from "dayjs";

interface IProps {
  className?: string;
  news: INews;
}

const OPER_TEXT = [
  ['добавлен маршрут', 'добавлен отчет', 'добавлено событие'],
  ['обновлен маршрут', 'обновлен отчет', 'обновлено событие'],
]

const OPER_URL = [
  '/route/',
  '/report/',
  '/event/',
]

export default function NewsItem({className, news}: IProps) {

  const cnNewsItem = cn(styles.newsItem, className)

  return (
    <div className={cnNewsItem}>
      {`${dayjs(news.oper === 1 ? news.dateCreate : news.dateUpdate).format('DD.MM.YYYY')} - ${OPER_TEXT[news.oper-1][news.type-1]}: `}
      <a href={OPER_URL[news.type-1]+news.id.toString()} className={styles.link}>{news.name}</a>
    </div>
  )
}