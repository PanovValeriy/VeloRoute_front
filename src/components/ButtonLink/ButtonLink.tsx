import styles from "./ButtonLink.module.css"
import cn from "classnames"
import React from "react";
import {Link} from "react-router-dom";
import Icon from "../Icon/Icon";

interface IProps {
  className?: String;
  type: "download" | "link_route" | "link_report" | "link_event";
  href: string;
  small?: boolean;
  children: React.ReactNode;
}


export default function ButtonLink({className, type, href, small, children}: IProps) {
  const cnButtonLink = cn(styles.buttonLink, className, {
    [styles.link]: type!=='download',
  });
  const iconNames = {
    'download': 'download',
    'link_route': 'route',
    'link_report': 'report',
    'link_event': 'calendar',
  }

  return (
      <Link className={cnButtonLink} to={href}>
        <div className={styles.buttonInner}>
          <div className={cn(styles.iconWrapper, {[styles.small]: small})}>
            <Icon className={cn(styles.icon, {[styles.small]: small})} iconName={iconNames[type]} />
          </div>
          {children}
        </div>
      </Link>
  )
}