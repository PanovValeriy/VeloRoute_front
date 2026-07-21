import parse, {domToReact} from 'html-react-parser';
import styles from "./Content.module.css";
import {Link} from "react-router-dom";

interface IStyles {
  paragraph?: string;
  photo?: string;
  map?: string;
  [key: string]: any;
}

interface IProps {
  pStyles?: IStyles;
  title?: string;
  body: string;
}

function createContent(content: string, pStyles: IStyles) {
  let key = 0
  
  function getKey() {
    return `rc_${++key}`
  }

  const contentArr: string[] = content.split('\n')
  const formatBOLD = '<strong>$1</strong>'
  const formatTITLE = '<span key="'+getKey()+'" className="' + pStyles.subtitle + '">$1</span>'
  const formatIMG = '<img className="' + pStyles.photo + '" key="' + getKey() + '" src="$1" alt="Фото" />'
  const formatMAP = '<iframe title="' + getKey() + '" className="' + pStyles.map + '" key="' + getKey() + '" src="$1"></iframe>'
  const formatLINK = '<linkinner className="' + pStyles.link + '" key="' + getKey() + '" href="$2">$1</linkinner>'
  const formatROUTE = '<linkinner className="' + pStyles.routeLink + '" key="' + getKey() + '" href="$2">$1</linkinner>'
  const formatREPORT = '<linkinner className="' + pStyles.reportLink + '" key="' + getKey() + '" href="$2">$1</linkinner>'
  const formatEVENT = '<linkinner className="' + pStyles.eventLink + '" key="' + getKey() + '" href="$2">$1</linkinner>'
  const formatINFO = '<linkinner className="' + pStyles.infoLink + '" key="' + getKey() + '" href="$2">$1</linkinner>'

  for (let i=0; i < contentArr.length; i++) {
    if (contentArr[i].slice(0, 5) !== '[IMG]' && contentArr[i].slice(0,5) !== '[MAP]' && contentArr[i].slice(0,7) !== '[TITLE]') {
      contentArr[i] = '<p className="' + pStyles.paragraph + '" key="' + getKey() + '">' + contentArr[i] + '</p>'
    }
    contentArr[i] = contentArr[i].replace(/\[BOLD](.*?)\[\/BOLD]/, formatBOLD)
    contentArr[i] = contentArr[i].replace(/\[TITLE](.*?)\[\/TITLE]/, formatTITLE)
    contentArr[i] = contentArr[i].replace(/\[LINK]\[LABEL](.*?)\[\/LABEL](.*?)\[\/LINK]/, formatLINK)
    contentArr[i] = contentArr[i].replace(/\[ROUTELINK]\[LABEL](.*?)\[\/LABEL](.*?)\[\/ROUTELINK]/, formatROUTE)
    contentArr[i] = contentArr[i].replace(/\[REPORTLINK]\[LABEL](.*?)\[\/LABEL](.*?)\[\/REPORTLINK]/, formatREPORT)
    contentArr[i] = contentArr[i].replace(/\[EVENTLINK]\[LABEL](.*?)\[\/LABEL](.*?)\[\/EVENTLINK]/, formatEVENT)
    contentArr[i] = contentArr[i].replace(/\[INFOLINK]\[LABEL](.*?)\[\/LABEL](.*?)\[\/INFOLINK]/, formatINFO)
    contentArr[i] = contentArr[i].replace(/\[IMG](.*?)\[\/IMG]/, formatIMG)
    contentArr[i] = contentArr[i].replace(/\[MAP](.*?)\[\/MAP]/, formatMAP)
  }

  content = contentArr.join('')
  return content
}

// Функция для обработки каждого тега <a>
const linkReplacer = (tag:any) => {
  // Проверяем, что это тег <linkinner>
  if (tag.name === 'linkinner') {
      // Возвращаем компонент <Link> вместо <linkinner>
      return <Link to={tag.attribs.href} className={tag.attribs.classname}> {domToReact(tag.children)} </Link>;
  }
  // Если это не наша ссылка, оставляем как есть
  return false;
};

export default function Content({title, body}: IProps) {
  return (
    <div className={styles.content}>
      {title && (<div className={styles.title}>{title}</div>)}
      {parse(createContent(body, styles), {replace: linkReplacer})}
    </div>
  )
}