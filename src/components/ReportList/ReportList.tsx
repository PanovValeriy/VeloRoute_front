import styles from './ReportList.module.css'
import {IReportShort} from "../../types/types";
import cn from "classnames";
import CardList from "../CardList/CardList";
import ReportCard from "../ReportCard/ReportCard";
import React from "react";

interface IProps {
  className?: string,
  title?: string,
  reportList: IReportShort[],
}

export default function ReportList({className, title, reportList}: IProps) {
  const cnReportList = cn(styles.reportList, className);

  return (
    <div className={cnReportList}>
      <div className={styles.title}>{title}</div>
      <CardList>
        {reportList.map((report, idx) => (
          <ReportCard key={idx} report={report} showViews={false} />
        ))}
      </CardList>
    </div>
  )
}