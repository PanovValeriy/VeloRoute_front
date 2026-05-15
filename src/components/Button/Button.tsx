import styles from './Button.module.css'
import React from "react"
import cn from "classnames"

interface IProps {
    className?: String;
    onClick?(): void;
    children: React.ReactNode;
}

export default function Button ({className, onClick, children}: IProps) {
    const cnButton = cn(styles.button, className)
    return (
        <div className={cnButton} onClick={onClick}>{children}</div>
    )
}