import styles from "./SearchPanel.module.css"
import cn from "classnames"
import {useState} from "react";

interface IProps {
  className?: string;
  search?: string;
  lengthFrom?: number;
  lengthTo?: number;
  onApply: (search: string, lengthFrom:number, lengthTo: number) => void;
}

export default function SearchPanel({className, search='', lengthFrom=0, lengthTo=0, onApply}: IProps) {

  const [searchValue, setSearchValue] = useState<string>(search)
  const [lengthFromValue, setLengthFromValue] = useState<number>(lengthFrom)
  const [lengthToValue, setLengthToValue] = useState<number>(lengthTo)
  const cnSearchPanel = cn(styles.searchPanel, className)

  function handleChangeSearch({target:{value}}: React.ChangeEvent<HTMLInputElement>): void {
    setSearchValue(value)
  }

  function handleChangeLengthFrom({target:{value}}: React.ChangeEvent<HTMLInputElement>): void {
    setLengthFromValue(parseInt(value))
  }

  function handleChangeLengthTo({target:{value}}: React.ChangeEvent<HTMLInputElement>): void {
    setLengthToValue(parseInt(value))
  }

  function handleClickApply(): void {
    onApply(searchValue, lengthFromValue, lengthToValue)
  }

  function handleClickClear(): void {
    setSearchValue('')
    setLengthFromValue(0)
    setLengthToValue(0)
    onApply('', 0, 0)
  }

  return (
    <div className={cnSearchPanel}>
      <div>
        <label>Строка поиска<input type="text" value={searchValue} onChange={handleChangeSearch} /></label>
        <label>Протяженность от<input type="number" value={lengthFromValue} onChange={handleChangeLengthFrom} /></label>
        <label>до<input type="number" value={lengthToValue} onChange={handleChangeLengthTo} /></label>
        <button onClick={handleClickApply}>Применить</button>
        <button onClick={handleClickClear}>Очистить</button>
      </div>
    </div>
  )
}