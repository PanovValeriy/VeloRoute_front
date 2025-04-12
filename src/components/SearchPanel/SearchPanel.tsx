import styles from "./SearchPanel.module.css"
import cn from "classnames"
import React, {useState} from "react";
import Select from "../Select/Select";

interface IProps {
  className?: string;
  fields: string[];
  search?: string;
  lengthFrom?: number;
  lengthTo?: number;
  complexityList?: {value: number, label: string}[];
  complexity?: number;
  onApply: (search: string, lengthFrom:number, lengthTo: number, complexity: number) => void;
}

export default function SearchPanel({className, fields, search='', lengthFrom=0, lengthTo=0, complexityList=[], complexity=0, onApply}: IProps) {

  const [searchValue, setSearchValue] = useState<string>(search)
  const [lengthFromValue, setLengthFromValue] = useState<number>(lengthFrom)
  const [lengthToValue, setLengthToValue] = useState<number>(lengthTo)
  const [complexityValue, setComplexityValue] = useState<number>(complexity)
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

  function handleChangeComplexity({target:{value}}: React.ChangeEvent<HTMLSelectElement>): void {
    setComplexityValue(parseInt(value))
  }

  function handleClickApply(): void {
    onApply(searchValue, lengthFromValue, lengthToValue, complexityValue)
  }

  function handleClickClear(): void {
    setSearchValue('')
    setLengthFromValue(0)
    setLengthToValue(0)
    setComplexityValue(0)
    onApply('', 0, 0, 0)
  }

  return (
    <div className={cnSearchPanel}>
      {(fields.indexOf('search') !== -1)
        ? <>
            <div>Строка поиска</div>
            <input type="text" value={searchValue} onChange={handleChangeSearch} />
          </>
        : null
      }
      {(fields.indexOf('length') !== -1)
        ? <>
            <div>Протяженность</div>
            <div>от</div>
            <input type="number" value={lengthFromValue} onChange={handleChangeLengthFrom} />
            <div>до</div>
            <input type="number" value={lengthToValue} onChange={handleChangeLengthTo} />
        </>
        : null
      }
      {(fields.indexOf('complexity') !== -1)
        ? <>
            <div>Сложность</div>
            <Select options={complexityList?.map(item => ({value: item.value.toString(), label: item.label}))} value={complexityValue.toString()} onChange={handleChangeComplexity} />
          </>
        : null
      }
      <button onClick={handleClickApply}>Применить</button>
      <button onClick={handleClickClear}>Очистить</button>
    </div>
  )
}