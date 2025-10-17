import React from "react"
import FormGroup from "../formGroup/FormGroup"

interface SelectOption {
    value: string
    label: string
}

interface FormSelectProps {
    label: string
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    required?: boolean
    options: SelectOption[]
}

const FormSelect: React.FC<FormSelectProps> = ({
    label,
    name,
    value,
    onChange,
    required = false,
    options,
}) => {
    return (
        <FormGroup>
            <label htmlFor={name}>{label}</label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </FormGroup>
    )
}

export default FormSelect
