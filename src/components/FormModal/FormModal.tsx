import styles from "./FormModal.module.css"

interface IProps {
  className?: string;
  onClick?: () => void;
}

export default function FormModal({className, onClick}: IProps) {
  return (
    <div onClick={onClick} className={styles.formModal}></div>
  )
}