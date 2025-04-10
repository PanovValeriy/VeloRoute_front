import curStyles from "./Content.module.css";

interface IStyles {
  paragraph?: string;
  photo?: string;
  map?: string;
  [key: string]: any;
}

interface IPros {
  pStyles?: IStyles;
  body: string;
}

export default function Content({pStyles, body}: IPros) {

  const styles = pStyles || curStyles

  function createContent(body: string) {
    const bodyArr = body.split('\n')
    let result = []
    let key = 0
    function getKey() {
      return `rc_${++key}`
    }
    for (const p of bodyArr) {
      let pStart = 0
      while (p.indexOf('[IMG]', pStart) !== -1 || p.indexOf('[MAP]', pStart) !== -1 || p.indexOf('[LINK]', pStart) !== -1) {
        const imgStart = p.indexOf('[IMG]', pStart)
        const imgEnd = p.indexOf('[/IMG]', imgStart)
        const mapStart = p.indexOf('[MAP]', pStart)
        const mapEnd = p.indexOf('[/MAP]', mapStart)
        const linkStart = p.indexOf('[LINK]', pStart)
        const linkEnd = p.indexOf('[/LINK]', linkStart)
        if (linkStart === -1) {
          result.push(
            <p className={styles.paragraph} key={getKey()}>
              {p.slice(0, (imgStart + mapStart + 1))}
            </p>
          )
        }
        if (imgStart !== -1) {
          result.push(
            <img
              className={styles.photo}
              key={getKey()}
              src={p.slice(imgStart + 5, imgEnd)}
              alt="Фото"
            />
          )
          pStart = imgEnd + 6
        }
        if (mapStart !== -1) {
          result.push(
            <iframe
              title={getKey()}
              className={styles.map}
              key={getKey()}
              src={p.slice(mapStart + 5, mapEnd)} ></iframe>

          )
          pStart = mapEnd + 6
        }
        if (linkStart !== -1) {
          let label = 'Скачать'
          let url = p.slice(linkStart + 6, linkEnd)
          const labelStart = url.indexOf('[LABEL]')
          const labelEnd = url.indexOf('[/LABEL]', labelStart)
          if (labelStart !== -1 && labelEnd > labelStart) {
            label = url.slice(labelStart + 7, labelEnd)
            url = url.slice(labelEnd + 8,url.length)
          }

          result.push(
            <p className={styles.paragraph} key={getKey()}>
              {p.slice(0, (linkStart))}
              <a
                className={styles.link}
                key={getKey()}
                href={url}
              >
                {label}
              </a>
              {p.slice(linkEnd+7, p.length)}
            </p>
          )
          pStart = p.length
        }
      }

      result.push(
        <p className={styles.paragraph} key={getKey()}>
          {p.slice(pStart, p.length)}
        </p>
      )
    }
    return result
  }

  return (
    <>{createContent(body)}</>
  )
}