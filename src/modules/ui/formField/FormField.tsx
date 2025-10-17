import React from "react"
import FormGroup from "../formGroup/FormGroup"

interface FormFieldProps {
    label: string
    name: string
    type?: "text" | "number" | "email" | "url" | "password"
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    required?: boolean
    placeholder?: string
    step?: string
}

const FormField: React.FC<FormFieldProps> = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    required = false,
    placeholder = "",
    step,
}) => {
    return (
        <FormGroup>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                step={step}
            />
        </FormGroup>
    )
}

export default FormField
