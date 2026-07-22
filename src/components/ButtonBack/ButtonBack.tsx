import styles from "./ButtonBack.module.css"
import {useNavigate} from "react-router-dom";
import Icon from "../Icon/Icon";

export default function ButtonBack() {
  const navigate = useNavigate();

  return (
    <button className={styles.buttonBack} onClick={() => navigate(-1)} ><Icon className={styles.icon} iconName="arrowLeft" />Назад</button>
  )
}