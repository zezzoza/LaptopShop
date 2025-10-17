import React from "react"
import FormGroup from "../formGroup/FormGroup"

interface FormImageFieldProps {
    index: number
    value: string
    onChange: (index: number, value: string) => void
    placeholder?: string
}

const FormImageField: React.FC<FormImageFieldProps> = ({
    index,
    value,
    onChange,
    placeholder = "https://example.com/image.jpg",
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(index, e.target.value)
    }

    return (
        <FormGroup>
            <label>Ссылка на изображение {index + 1}</label>
            <input
                type="url"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </FormGroup>
    )
}

export default FormImageField
