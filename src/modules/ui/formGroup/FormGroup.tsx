import React from "react"
import s from "./formGroup.module.scss"

interface FormGroupProps {
    children: React.ReactNode
    className?: string
}

const FormGroup: React.FC<FormGroupProps> = ({ children }) => {
    return <div className={s.formGroup}>{children}</div>
}

export default FormGroup
