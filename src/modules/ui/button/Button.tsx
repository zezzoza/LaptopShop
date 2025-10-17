import React, { ReactNode } from "react"
import s from "./button.module.scss"

const Button = ({
    children,
    variable,
    onClick,
    className,
    type,
    disabled,
}: {
    children: string | ReactNode
    variable?: number
    onClick?: () => void
    className?: string
    type?: string
    disabled?: boolean
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
