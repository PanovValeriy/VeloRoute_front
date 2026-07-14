import styles from "./ViewInfoList.module.css"
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import Button from "../../components/Button/Button";
import React, {useEffect, useMemo} from "react";
import Pagination from "../../components/Pagination/Pagination";
import {infoDefault, reportDefault} from "../../constants";
import {IInfoListParam, useLazyGetInfoListQuery} from "../../store/services/infoApi";
import InfoItem from "./components/InfoItem/InfoItem";

export default function ViewInfoList() {

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [getInfoList,{data, isLoading}] = useLazyGetInfoListQuery()
  const param: IInfoListParam = useMemo<IInfoListParam>(() => ({
    page: parseInt(searchParams.get('page') || '1'),
    limit: parseInt(searchParams.get('limit') || infoDefault.limit.toString()),
  }),[searchParams])


  function handleChangePage(page: number, pageSize: number) {
    const urlParam: Record<string, any> = new URLSearchParams()
    if (page !== 1 && pageSize === param.limit) {
      urlParam.append('page', page)
    }
    if (pageSize !== reportDefault.limit) {
      urlParam.append('limit', pageSize)
    }
    navigate(`/infos?${urlParam}`)
  }

  useEffect(() => {
    getInfoList(param)
  }, [getInfoList, param])

  if (isLoading) {
    return (
      <div>Загрузка</div>
    )
  }

  if (!data) {
    return (<div>Сообщения отсутствуют</div>)
  }

  if (param.limit && ((data.recCount !== 0) ? Math.ceil(data.recCount/param.limit) : 1) < (param.page || 1)) {
    handleChangePage((data.recCount !== 0) ? Math.ceil(data.recCount/param.limit) : 1, param.limit)
  }

  return (
    <div className={styles.viewInfoList}>
      <Link className={styles.linkItem} to={"/"}><Button className={styles.button}>На главную</Button></Link>
      <div className={styles.title}>Информация</div>
      <div className={styles.infoList}>
        {data!.infoList.map((info, idx) => (
          <div>
            <Link key={idx} className={styles.linkItem} to={"/info/"+info.id}>
              <InfoItem info={info} />
            </Link>
          </div>
        ))}
        <Pagination current={param.page} pageSize={param.limit} total={data.recCount} hideOnSinglePage={true} onChange={handleChangePage} />
      </div>
      <Link className={styles.linkItem} to={"/"}><Button className={styles.button}>На главную</Button></Link>
    </div>
  )
}