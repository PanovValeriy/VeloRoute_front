import React from "react";
import styles from "./Select.module.css"
import cn from "classnames"

interface IProps {
  className? : string;
  options: {value: string,  label: string}[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({className, options, value, onChange}: IProps) {

  const cnSelect = cn(styles.select, className)

  return (
    <select className={cnSelect} value={value} onChange={onChange}>
      {options.map(item => (<option key={item.value} value={item.value}>{item.label}</option>))}
    </select>
  )
}