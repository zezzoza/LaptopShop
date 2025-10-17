import React from "react"
import FormGroup from "../formGroup/FormGroup"

interface FormTextareaProps {
    label: string
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    required?: boolean
    placeholder?: string
    rows?: number
}

const FormTextarea: React.FC<FormTextareaProps> = ({
    label,
    name,
    value,
    onChange,
    required = false,
    placeholder = "",
    rows = 3,
}) => {
    return (
        <FormGroup>
            <label htmlFor={name}>{label}</label>
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                rows={rows}
            />
        </FormGroup>
    )
}

export default FormTextarea
