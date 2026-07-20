import styles from "./ButtonLink.module.css"
import cn from "classnames"
import React from "react";
import {Link} from "react-router-dom";

interface IProps {
  className?: String;
  to: string;
  children: React.ReactNode;
}


export default function ButtonLink({className, to, children}: IProps) {
  const cnButtonLink = cn(styles.buttonLink, className)

  return (
    <Link className={cnButtonLink} to={to}><div className={styles.buttonLinkInner}>{children}</div></Link>
  )
}