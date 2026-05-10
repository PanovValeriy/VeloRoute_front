import curStyles from "./Content.module.css";

interface IStyles {
  paragraph?: string;
  photo?: string;
  map?: string;
  [key: string]: any;
}

interface IProps {
  pStyles?: IStyles;
  body: string;
}

interface IResultFindTags {
  result: boolean;
  imgStart: number;
  imgEnd: number;
  mapStart: number;
  mapEnd: number;
  linkStart: number;
  linkEnd: number;
  titleStart: number;
  titleEnd: number;
  boldStart: number;
  boldEnd: number;
}

function createContent(body: string, styles: IStyles) {


  let key = 0
  function getKey() {
    return `rc_${++key}`
  }


  function findTags(content:string, findStart: number): IResultFindTags {
    const imgStart: number = content.indexOf('[IMG]', findStart)
    const imgEnd: number = content.indexOf('[/IMG]', imgStart)
    const mapStart: number = content.indexOf('[MAP]', findStart)
    const mapEnd: number = content.indexOf('[/MAP]', mapStart)
    const linkStart: number = content.indexOf('[LINK]', findStart)
    const linkEnd: number = content.indexOf('[/LINK]', linkStart)
    const titleStart: number = content.indexOf('[TITLE]', findStart)
    const titleEnd: number = content.indexOf('[/TITLE]', titleStart)
    const boldStart: number = content.indexOf('[BOLD]', findStart)
    const boldEnd: number = content.indexOf('[/BOLD]', boldStart)
    const result: boolean = imgStart !== -1 || mapStart !== -1 || linkStart !== -1 || titleStart !== -1 || boldStart !== -1;
    return {result, imgStart, imgEnd, mapStart, mapEnd, linkStart, linkEnd, titleStart, titleEnd, boldStart, boldEnd}
  }


  const bodyArr: string[] = body.split('\n')
  let result = []

  for (const p of bodyArr) {
    let pStart = 0
    const resultParagraph = []
    let find: IResultFindTags = findTags(p, pStart);
    while (find.result) {
      if (find.linkStart === -1 && find.boldStart === -1) {
        result.push(
          <p className={styles.paragraph} key={getKey()}>
            {p.slice(0, (find.imgStart + find.mapStart + find.titleStart + 2))}
          </p>
        )
      }
      if (find.imgStart !== -1) {
        result.push(
          <img
            className={styles.photo}
            key={getKey()}
            src={p.slice(find.imgStart + 5, find.imgEnd)}
            alt="Фото"
          />
        )
        pStart = find.imgEnd + 6
      }
      if (find.mapStart !== -1) {
        result.push(
          <iframe
            title={getKey()}
            className={styles.map}
            key={getKey()}
            src={p.slice(find.mapStart + 5, find.mapEnd)} ></iframe>
        )
        pStart = find.mapEnd + 6
      }
      if (find.titleStart !== -1) {
        resultParagraph.push(
          <span key={getKey()} className={styles.subtitle}>
              {p.slice(find.titleStart + 7, find.titleEnd)}
            </span>
        )
        pStart = find.titleEnd + 8
      }
      if (find.boldStart !== -1) {
        resultParagraph.push(
          <span key={getKey()}>
            {p.slice(pStart, (find.boldStart))}
            <strong key={getKey()}>
              {p.slice(find.boldStart + 6, find.boldEnd)}
            </strong>
          </span>
        )
        pStart = find.boldEnd + 7
      }
      if (find.linkStart !== -1) {
        let label = 'Скачать'
        let url = p.slice(find.linkStart + 6, find.linkEnd)
        const labelStart = url.indexOf('[LABEL]')
        const labelEnd = url.indexOf('[/LABEL]', labelStart)
        if (labelStart !== -1 && labelEnd > labelStart) {
          label = url.slice(labelStart + 7, labelEnd)
          url = url.slice(labelEnd + 8,url.length)
        }

        resultParagraph.push(
          <span key={getKey()}>
              {p.slice(pStart, (find.linkStart))}
            <a
              className={styles.link}
              key={getKey()}
              href={url}
            >
                {label}
              </a>
            </span>
        )
        pStart = find.linkEnd + 7
      }
      find = findTags(p, pStart);
    }
    if (p.slice(pStart, p.length) !== '') {
      resultParagraph.push(
        <span key={getKey()}>
          {p.slice(pStart, p.length)}
        </span>
      )
    }
    if (resultParagraph.length !== 0) {
      result.push(
        <p className={styles.paragraph} key={getKey()}>
          {resultParagraph}
        </p>
      )
    }
  }
  return result
}


export default function Content({pStyles, body}: IProps) {

  return (
    <>{createContent(body, pStyles || curStyles)}</>
  )
}