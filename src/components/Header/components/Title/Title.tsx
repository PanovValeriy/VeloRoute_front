import styles from "./Title.module.css"

export default function Title() {
  return (
    <div className={styles.title}>
      <div className={styles.subtitle_big}>
        Велосипедные маршруты <br/>
        Смоленской области
      </div>
      <div className={styles.subtitle_small}>
        Находите новые маршруты, делитесь впечатлениями<br/>
        и вдохновляйте других на приключения.
      </div>
    </div>
  )
}