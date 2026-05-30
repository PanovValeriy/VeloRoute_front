import styles from "./DateCreateUpdate.module.css"
import dayjs from "dayjs";
import cn from "classnames"

interface IProps {
  className?: string,
  dateCreate: Date;
  dateUpdate: Date;
}

export default function DateCreateUpdate({className, dateCreate, dateUpdate}: IProps) {
  const cnDateCreateUpdate = cn(styles.dateCreateUpdate, className)
  return (
    <div className={cnDateCreateUpdate}>
      <div>Дата создания: {dayjs(dateCreate).format('DD.MM.YYYY')}</div>
      {dateCreate !== dateUpdate ? <div>Дата обновления: {dayjs(dateUpdate).format('DD.MM.YYYY')}</div> : null}
    </div>
  )
}