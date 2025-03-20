import styles from './ButtonImage.module.css'
import Icon from "../../../../components/Icon/Icon";
import cn from "classnames";

interface IProps {
  className?: string
  iconName: string;
  label: string;
}

export default function ButtonImage({className, iconName, label}: IProps) {

  const cnButtonImage = cn(styles.buttonImage,className)

  return (
    <div className={cnButtonImage}>
      <Icon className={styles.icon} iconName={iconName}/>
      <div className={styles.label}>{label}</div>
    </div>
  )
}