import styles from './EventToggleMemberConfirm.module.css'
import cn from 'classnames'
import {IEvent} from "../../../../types/types";
import Icon from "../../../../components/Icon/Icon";
import Button from "../../../../components/Button/Button";
import dayjs from "dayjs";

interface IProps {
  event: IEvent;
  onClickOk: () => void;
  onClickCancel: () => void;
}

export default function EventToggleMemberConfirm({event, onClickOk, onClickCancel}: IProps) {

  const cnButtonOk = cn(styles.button, styles.buttonOk, {
    [styles.in] : !event.member,
    [styles.out] : event.member,
  })
  const cnButtonCancel = cn(styles.button, styles.buttonCancel, {
    [styles.in] : !event.member,
    [styles.out] : event.member,
  })

  return (
    <div className={styles.back}>
      <div className={styles.eventToggleMemberConfirm}>
        <div className={styles.title}>{event.name}</div>
        <div className={styles.item}><Icon className={styles.itemIcon} iconName="calendar" /><div className={styles.itemText}>{dayjs(event.startDateTime).format('DD.MM.YYYY')}</div></div>        <div className={styles.item}><Icon className={styles.itemIcon} iconName="clock" /><div className={styles.itemText}>{dayjs(event.startDateTime).format('HH.mm')}</div></div>
        <div className={styles.item}><Icon className={styles.itemIcon} iconName="location" /><div className={styles.itemText}>{event.startPlace}</div></div>
        <Button className={cnButtonOk} onClick={onClickOk}>{(!event.member) ? 'Подтвердить запись' : 'Отменить запись'}</Button>
        <Button className={cnButtonCancel} onClick={onClickCancel}>{(!event.member) ? 'Отмена' : 'Остаться'}</Button>
      </div>
    </div>
  )
}