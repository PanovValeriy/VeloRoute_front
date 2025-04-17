import styles from "./SearchPanel.module.css"
import cn from "classnames"
import React, {useEffect, useState} from "react";
import Select from "../Select/Select";

export interface IOnApplySearch {
  search?: string,
  lengthFrom?:number,
  lengthTo?: number,
  complexity?: number,
  hideArchive?: boolean,
}

interface IProps {
  className?: string;
  fields: string[];
  search?: string;
  lengthFrom?: number;
  lengthTo?: number;
  complexityList?: {value: number, label: string}[];
  complexity?: number;
  hideArchive?: boolean;
  onApply: (param: IOnApplySearch) => void;
}

export default function SearchPanel({className, fields, search='', lengthFrom=0, lengthTo=0, complexityList=[], complexity=0, hideArchive=false, onApply}: IProps) {

  const [searchValue, setSearchValue] = useState<string>(search)
  const [lengthFromValue, setLengthFromValue] = useState<number>(lengthFrom)
  const [lengthToValue, setLengthToValue] = useState<number>(lengthTo)
  const [complexityValue, setComplexityValue] = useState<number>(complexity)
  const [hideArchiveValue, setHideArchiveValue] = useState<boolean>(hideArchive)
  const cnSearchPanel = cn(styles.searchPanel, className)


  function handleChangeSearch({target:{value}}: React.ChangeEvent<HTMLInputElement>): void {
    setSearchValue(value)
  }

  function handleChangeLengthFrom({target:{value}}: React.ChangeEvent<HTMLInputElement>): void {
    setLengthFromValue(parseInt(value) || 0)
  }

  function handleChangeLengthTo({target:{value}}: React.ChangeEvent<HTMLInputElement>): void {
    setLengthToValue(parseInt(value) || 0)
  }

  function handleChangeComplexity({target:{value}}: React.ChangeEvent<HTMLSelectElement>): void {
    setComplexityValue(parseInt(value))
  }

  function handleChangeHideArchive({target: {checked}}: React.ChangeEvent<HTMLInputElement>): void {
    setHideArchiveValue(checked)
  }

  function handleClickApply(): void {
    onApply({search: searchValue, lengthFrom: (lengthFromValue || 0), lengthTo: (lengthToValue || 0), complexity: complexityValue, hideArchive: hideArchiveValue})
  }

  function handleKeyDown(evt: React.KeyboardEvent<HTMLInputElement>): void {
    if (evt.code === 'Enter' || evt.code === 'NumpadEnter') {
      handleClickApply()
    }
  }

  function handleClickClear(): void {
    setSearchValue('')
    setLengthFromValue(0)
    setLengthToValue(0)
    setComplexityValue(0)
    setHideArchiveValue(false)
    onApply({search: '', lengthFrom: 0, lengthTo: 0, complexity: 0, hideArchive: false})
  }

  useEffect(() => {
    handleClickApply()
  }, [complexityValue, hideArchiveValue])

  return (
    <div className={cnSearchPanel}>
      {(fields.indexOf('search') !== -1)
        ? <>
            <div className={styles.label}>Строка поиска</div>
            <input className={styles.input} type="text" value={searchValue} onChange={handleChangeSearch} onKeyDown={handleKeyDown} />
          </>
        : null
      }
      {(fields.indexOf('length') !== -1)
        ? <>
            <div className={styles.label}>Протяженность</div>
            <div className={styles.label}>от</div>
            <input className={styles.input} type="number" value={lengthFromValue.toString()} onChange={handleChangeLengthFrom} onKeyDown={handleKeyDown} />
            <div className={styles.label}>до</div>
            <input className={styles.input} type="number" value={lengthToValue.toString()} onChange={handleChangeLengthTo} onKeyDown={handleKeyDown} />
        </>
        : null
      }
      {(fields.indexOf('complexity') !== -1)
        ? <>
            <div className={styles.label}>Сложность</div>
            <Select className={styles.input} options={complexityList?.map(item => ({value: item.value.toString(), label: item.label}))} value={complexityValue.toString()} onChange={handleChangeComplexity} />
          </>
        : null
      }
      {(fields.indexOf('hideArchive') !== -1)
        ? <>
            <div className={styles.label}>Прошедшие события</div>
            <label className={styles.label}>Скрыть <input className={styles.input} type="checkbox" checked={hideArchiveValue} onChange={handleChangeHideArchive}/></label>
          </>
        : null
      }
      <button className={styles.button} onClick={handleClickApply}>Применить</button>
      <button className={styles.button} onClick={handleClickClear}>Очистить</button>
    </div>
  )
}