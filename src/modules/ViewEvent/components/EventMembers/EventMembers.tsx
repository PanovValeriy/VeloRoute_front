import styles from './EventMembers.module.css'
import cn from 'classnames'
import Icon from "../../../../components/Icon/Icon";
import Button from "../../../../components/Button/Button";
import {useState} from "react";
import {useToggleEventMemberMutation} from "../../../../store/services/eventApi";
import {useAuth} from "../../../../context/AuthContext";
import EventToggleMemberConfirm from "../EventToggleMemberConfirm/EventToggleMemberConfirm";
import {IEvent} from "../../../../types/types";
import dayjs from "dayjs";

interface IProps {
  className?: string;
  event: IEvent
}

export default function EventMembers({className, event}: IProps) {

  const {isAuthenticated} = useAuth()
  const [toggleEventMember] = useToggleEventMemberMutation()
  const [memberListHide, setMemberListHide] = useState(true);
  const cnEventMembers = cn(styles.eventMembers, className)
  const cnMembersList = cn(styles.membersList, {[styles.hide]: memberListHide})
  const [showConfirm, setShowConfirm] = useState(false)

  function handleToggleEventMember() {
    if (isAuthenticated) {
      toggleEventMember(event.id)
    }
    setShowConfirm(false)
  }

  const cnMemberButton = cn(styles.memberButton, {
    [styles.on]: !event.member,
    [styles.off]: event.member,
  })

  const showMemberButton: boolean = isAuthenticated && (dayjs(event.startDateTime) > dayjs(new Date()))

  return (
    <div className={cnEventMembers}>
      <div className={styles.membersWrapper}>
        <div className={styles.membersCountLine}>
          <div className={styles.membersCountLineLeft}>
            <Icon className={styles.membersCountLineIcon} iconName="member" />
            <div className={styles.membersCountLineText}>Участников: {event.membersCount}</div>
          </div>
          <div className={styles.membersCountLineButton} onClick={() => {setMemberListHide(!memberListHide)}}><Icon className={styles.membersCountLineButton} iconName="arrowDown" /></div>
        </div>
        <div className={cnMembersList}>
          {event.members_set.map((item, index) => (<div className={styles.memberItem} key={index}>{item}</div>))}
        </div>
      </div>
      {(showMemberButton) ? <Button className={cnMemberButton} onClick={() => setShowConfirm(true)}>{!event.member ? 'Записаться' : 'Отменить запись'}</Button> : null}
      {(showConfirm) ? <EventToggleMemberConfirm event={event} onClickOk={handleToggleEventMember} onClickCancel={() => setShowConfirm(false)}/> : null}
    </div>
  )
}