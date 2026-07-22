import styles from './ViewInfo.module.css'
import {useSearchParams} from "react-router-dom";
import {useParams} from "react-router";
import {useGetInfoQuery} from "../../store/services/infoApi";
import Content from "../../components/Content/Content";

export default function ViewInfo() {

  // const navigate = useNavigate()
  const {id} = useParams()
  const [searchParams] = useSearchParams()
  const infoId: number = Number(id)

  const code = searchParams.get('code') || ''
  const {data: info, isLoading} = useGetInfoQuery({infoId, code})

  if (isLoading) {
    return (<div>Загрузка</div>)
  }

  if (!info) {
    return (
      <>
        {/*<button className={styles.button} onClick={() => navigate(-1)}>Назад</button>*/}
        <div>Сообщение не найдено</div>
      </>
    )
  }


  return (
    <div className={styles.viewInfo}>
      {/*<Button className={styles.button} onClick={() => navigate(-1)}>Назад</Button>*/}
      {/*<DateCreateUpdate className={styles.dateCreateUpdate} dateCreate={info.dateCreate} dateUpdate={info.dateUpdate} />*/}
      <div className={styles.title}>"{info.name}"</div>
      <Content title="Информация" body={info.body} />
      {/*<Button className={styles.button} onClick={() => navigate(-1)}>Назад</Button>*/}
    </div>
  )
}