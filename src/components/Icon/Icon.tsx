import {ReactComponent as SvgEvent} from "./icons/icon-event.svg";
import {ReactComponent as SvgRoute} from "./icons/icon-route.svg";
import {ReactComponent as SvgReport} from "./icons/icon-report.svg";

interface IProps {
  iconName: string;
  className: string;
}

export default function Icon ({ iconName, className }: IProps) {
  switch (iconName) {
    case "event":
      return <SvgEvent className={className} />;

    case "route":
      return <SvgRoute className={className} />;

    case "report":
      return <SvgReport className={className} />;

    default:
      return null;
  }
};
