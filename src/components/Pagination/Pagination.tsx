import styles from "./Pagination.module.css"
import cn from "classnames"


interface IProps {
  className?: string;
  current?: number;
  pageSize?: number;
  total: number;
  hideOnSinglePage?: boolean;
  onChange(page: number, pageSize: number): void;
}

export default function Pagination({className, current = 1, pageSize = 10, total, hideOnSinglePage = false, onChange}: IProps) {
  const cnPagination = cn(styles.pagination, className)

  const pageCount = (pageSize !== 0) ? Math.ceil(total / pageSize) : 1
  let pageStart = (current > 2) ? current - 2 : 1
  let pageEnd = (pageStart + 4  < pageCount) ? pageStart + 4 : pageCount
  if (pageEnd - pageStart < 4) {
    pageStart = pageEnd - 4
    if (pageStart < 1) {
      pageStart = 1
    }
  }
  const paginatorButtons = []
  let key = 0
  for (let i = pageStart; i <= pageEnd; i++) {
    const cnButton = cn(styles.buttonPage,{
      [styles.buttonPageActive]: (i === current)
    })
    paginatorButtons.push((
      <div key={++key} className={cnButton} onClick={(i !== current) ? () => onChange(i, pageSize): ()=>null}>{i}</div>
    ))
  }

  if (hideOnSinglePage && pageCount === 1) {
    return null
  }

  return (
    <div className={cnPagination}>
      {paginatorButtons}
    </div>
  )
}