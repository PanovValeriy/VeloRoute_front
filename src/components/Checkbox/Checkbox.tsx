import styles from "./Checkbox.module.css"
import cn from "classnames"
import Icon from "../Icon/Icon";

interface IProps {
  className?: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>)=> void;
  label?: string;
}

export default function Checkbox({className, checked, onChange, label}: IProps) {

  const cnCheckbox = cn(styles.checkbox, className)

  return (
    <label className={cnCheckbox}><input type="checkbox" className={styles.input} onChange={onChange} checked={checked} /><Icon className={styles.icon} iconName="checkbox" />{label}</label>
  )
}