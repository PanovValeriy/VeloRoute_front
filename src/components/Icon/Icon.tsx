import {ReactComponent as SvgEvent} from "./icons/icon-event.svg";
import {ReactComponent as SvgMoon} from "./icons/icon_moon.svg";
import {ReactComponent as SvgSun} from "./icons/icon_sun.svg";
import {ReactComponent as SvgCalendar} from "./icons/icon_calendar.svg"
import {ReactComponent as SvgDelimiter} from "./icons/icon_delimiter.svg"
import {ReactComponent as SvgDistance} from "./icons/icon_distance.svg"
import {ReactComponent as SvgDifficulty} from "./icons/icon_difficulty.svg"
import {ReactComponent as SvgViews} from "./icons/icon_views.svg"
import {ReactComponent as SvgRoute} from "./icons/icon_route.svg"
import {ReactComponent as SvgReport} from "./icons/icon_report.svg"
import {ReactComponent as SvgArrowDown} from "./icons/icon_arrow-down.svg"
import {ReactComponent as SvgArrowLeft} from "./icons/icon_arrow-left.svg"
import {ReactComponent as SvgArrowRight} from "./icons/icon_arrow-right.svg"
import {ReactComponent as SvgAsphatl} from "./icons/icon_asphalt.svg"
import {ReactComponent as SvgGravel} from "./icons/icon_gravel.svg"
import {ReactComponent as SvgSoil} from "./icons/icon_soil.svg"
import {ReactComponent as SvgJungle} from "./icons/icon_jungle.svg"
import {ReactComponent as SvgClock} from "./icons/icon_clock.svg"
import {ReactComponent as SvgDownload} from "./icons/icon_download.svg"
import {ReactComponent as SvgLocation} from "./icons/icon_location.svg"
import {ReactComponent as SvgTempo} from "./icons/icon_tempo.svg"
import {ReactComponent as SvgSearch} from "./icons/icon_search.svg"
import {ReactComponent as SvgHome} from "./icons/icon_home.svg";
import {ReactComponent as SvgFilter} from "./icons/icon_filter.svg";
import {ReactComponent as SvgInfo} from "./icons/icon_info.svg";
import {ReactComponent as SvgClose} from "./icons/icon_close.svg";



interface IProps {
  iconName: string;
  className?: string;
}

export default function Icon ({ iconName, className }: IProps) {
  switch (iconName) {
    case "event":
      return <SvgEvent className={className} />;

    case "route":
      return <SvgRoute className={className} />;

    case "report":
      return <SvgReport className={className} />;

    case "moon":
      return <SvgMoon className={className} />;

    case "sun":
      return <SvgSun className={className} />;

    case "calendar":
      return <SvgCalendar className={className} />

    case "delimiter":
      return <SvgDelimiter className={className} />

    case "distance":
      return <SvgDistance className={className} />

    case "difficulty":
      return <SvgDifficulty className={className} />

    case "views":
      return <SvgViews className={className} />

    case "arrowDown":
      return <SvgArrowDown className={className} />

    case "arrowLeft":
      return <SvgArrowLeft className={className} />

    case "arrowRight":
      return <SvgArrowRight className={className} />

    case "asphalt":
      return <SvgAsphatl className={className} />

    case "gravel":
      return <SvgGravel className={className} />

    case "soil":
      return <SvgSoil className={className} />

    case "jungle":
      return <SvgJungle className={className} />

    case "clock":
      return <SvgClock className={className} />

    case "download":
      return <SvgDownload className={className} />

    case "location":
      return <SvgLocation className={className} />

    case "tempo":
      return <SvgTempo className={className} />

    case "search":
      return <SvgSearch className={className} />

    case "home":
      return <SvgHome className={className} />

    case "filter":
      return <SvgFilter className={className} />

    case "info":
      return <SvgInfo className={className} />

    case "close":
      return <SvgClose className={className} />

    default:
      return null;
  }
};
