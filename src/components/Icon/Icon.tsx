import {ReactComponent as SvgEvent} from "./icons/icon-event.svg";
import {ReactComponent as SvgRoute} from "./icons/icon-route.svg";
import {ReactComponent as SvgReport} from "./icons/icon-report.svg";
import {ReactComponent as SvgMoon} from "./icons/icon_moon.svg";
import {ReactComponent as SvgSun} from "./icons/icon_sun.svg";
import {ReactComponent as SvgInfo} from "./icons/icon-info.svg";
import {ReactComponent as SvgCalendar} from "./icons/icon-calendar.svg"

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

    case "info":
      return <SvgInfo className={className} />;

    case "moon":
      return <SvgMoon className={className} />;

    case "sun":
      return <SvgSun className={className} />;

    case "calendar":
      return <SvgCalendar className={className} />

    default:
      return null;
  }
};
