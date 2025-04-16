import styles from "./SortPanel.module.css"
import cn from "classnames"
import React from "react";
import Select from "../Select/Select";

interface IProps {
  className?: string;
  options: {value: string, label: string}[];
  value?: string;
  onApply: (sort: string) => void;
}

export default function SortPanel({className, options, value='', onApply}: IProps) {

  const cnSortPanel = cn(styles.sortPanel, className)

  function handleChangeSort({target: {value}}: React.ChangeEvent<HTMLSelectElement>) {
    onApply(value)
  }

  return (
    <div className={cnSortPanel}>
      <div>Упорядочить по</div>
      <Select options={options} value={value} onChange={handleChangeSort} />
    </div>
  )
}