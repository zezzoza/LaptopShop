"use client"
import React, { useState } from "react"
import s from "./addProductModal.module.scss"
import { useAppDispatch } from "@/hooks/useApp"
import { useAdmin } from "@/hooks/useAdmin"
import { closeAddModal } from "@/store/slices/adminSlice"
import { useAddLaptopMutation } from "@/store/api/apiLaptops"
import { createPortal } from "react-dom"
import Button from "@/modules/ui/button/Button"
import { Laptop } from "@/types/typeLaptop"
import FormField from "@/modules/ui/formField/FormField"
import FormTextarea from "@/modules/ui/formTextarea/FormTextarea"
import FormSelect from "@/modules/ui/formSelect/FormSelect"
import FormImageField from "@/modules/ui/formImageField/FormImageField"

const AddProductModal = () => {
    const dispatch = useAppDispatch()
    const { isAddModalOpen } = useAdmin()
    const [addLaptop, { isLoading }] = useAddLaptopMutation()

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        currency: "RUB",
        category: "Ноутбуки",
        brand: "",
        images: [""],
    })

    const handleClose = () => {
        dispatch(closeAddModal())
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const newLaptop: Omit<Laptop, "id"> = {
                name: formData.name,
                description: formData.description,
                price: Number(formData.price),
                currency: formData.currency,
                category: formData.category,
                brand: formData.brand,
                images: formData.images.filter((img) => img.trim() !== ""),
                specifications: {
                    general: {
                        country: "",
                        model: "",
                    },
                    design: {
                        coverColor: "",
                        coverMaterial: "",
                        bodyMaterial: "",
                    },
                    input: {
                        keyboardLayout: "",
                        numpad: false,
                    },
                    display: {
                        type: "",
                        diagonal: 0,
                        resolution: "",
                        refreshRate: 0,
                    },
                    processor: {
                        model: "",
                        totalCores: 0,
                        performanceCores: 0,
                        efficiencyCores: 0,
                    },
                    memory: {
                        type: "",
                        size: 0,
                        slots: 0,
                        frequency: 0,
                        maxSize: 0,
                    },
                    graphics: {
                        type: "",
                        integrated: "",
                        discrete: "",
                        manufacturer: "",
                        memoryType: "",
                    },
                    storage: {
                        ssdSize: 0,
                        ssdType: "",
                        freeSlots: "",
                    },
                },
            }

            await addLaptop(newLaptop).unwrap()
            handleClose()

            setFormData({
                name: "",
                description: "",
                price: "",
                currency: "RUB",
                category: "Ноутбуки",
                brand: "",
                images: [""],
            })
        } catch (error) {
            console.error("Ошибка при добавлении товара:", error)
        }
    }

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleImageChange = (index: number, value: string) => {
        const newImages = [...formData.images]
        newImages[index] = value
        setFormData((prev) => ({
            ...prev,
            images: newImages,
        }))
    }

    const addImageField = () => {
        setFormData((prev) => ({
            ...prev,
            images: [...prev.images, ""],
        }))
    }

    if (!isAddModalOpen) return null

    return createPortal(
        <>
            <div className={s.overlay} onClick={handleClose} />
            <div className={s.modal}>
                <div className={s.header}>
                    <h2>Добавить новый товар</h2>
                    <Button className={s.closeButton} onClick={handleClose}>
                        ×
                    </Button>
                </div>

                <form onSubmit={handleSubmit} className={s.form}>
                    <div className={s.scrollContent}>
                        <div className={s.section}>
                            <h3>Основная информация</h3>

                            <FormField
                                label="Название товара"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />

                            <FormTextarea
                                label="Описание"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                                rows={3}
                            />

                            <div className={s.formRow}>
                                <FormField
                                    label="Цена"
                                    name="price"
                                    type="number"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    required
                                />

                                <FormSelect
                                    label="Валюта"
                                    name="currency"
                                    value={formData.currency}
                                    onChange={handleInputChange}
                                    options={[
                                        { value: "RUB", label: "RUB" },
                                        { value: "USD", label: "USD" },
                                    ]}
                                />
                            </div>

                            <div className={s.formRow}>
                                <FormField
                                    label="Бренд"
                                    name="brand"
                                    type="text"
                                    value={formData.brand}
                                    onChange={handleInputChange}
                                    required
                                />

                                <FormField
                                    label="Категория"
                                    name="category"
                                    type="text"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={s.section}>
                            <h3>Изображения</h3>
                            {formData.images.map((image, index) => (
                                <FormImageField
                                    key={index}
                                    index={index}
                                    value={image}
                                    onChange={handleImageChange}
                                    placeholder="https://example.com/image.jpg"
                                />
                            ))}
                            <Button
                                type="button"
                                variable={1}
                                onClick={addImageField}
                            >
                                Добавить изображение
                            </Button>
                        </div>

                        <div className={s.section}>
                            <h3>Характеристики</h3>
                            <div className={s.infoMessage}>
                                <p>
                                    Для упрощения формы добавлены только
                                    основные поля.
                                </p>
                                <p>
                                    Остальные характеристики (память, графика,
                                    хранилище, дизайн, ввод) можно добавить по
                                    аналогии при необходимости.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={s.footer}>
                        <Button variable={1} onClick={handleClose}>
                            Отмена
                        </Button>
                        <Button type="submit" variable={2} disabled={isLoading}>
                            {isLoading ? "Добавление..." : "Добавить товар"}
                        </Button>
                    </div>
                </form>
            </div>
        </>,
        document.body,
    )
}

export default AddProductModal
