import React, { ReactNode } from "react"
import s from "./button.module.scss"

const Button = ({
    children,
    variable,
    onClick,
    className,
}: {
    children: string | ReactNode
    variable?: number
    onClick?: () => void
    className?: string
}) => {
    return (
        <button
            onClick={onClick}
            className={className ? className : s[`button${variable}`]}
        >
            {children}
        </button>
    )
}

export default Button
