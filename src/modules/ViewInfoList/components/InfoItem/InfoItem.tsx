import styles from './InfoItem.module.css'
import {IInfoShort} from "../../../../types/types";

interface IProps {
  info: IInfoShort,
}

export default function InfoItem({info}: IProps)  {
  return (
    <div className={styles.infoItem}>
      {info.name}
    </div>
  )
}