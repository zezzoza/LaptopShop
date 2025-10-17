"use client"
import React, { useEffect, useState } from "react"
import s from "./detailModal.module.scss"
import { useAppDispatch } from "@/hooks/useApp"
import { useDetail } from "@/hooks/useDetail"
import { useEdit } from "@/hooks/useEdit"
import { closeDetail } from "@/store/slices/detailSlcie"
import {
    startEditing,
    stopEditing,
    updateEditingProduct,
} from "@/store/slices/editSlice"
import { addToCart } from "@/store/slices/cartSlice"
import {
    useDeleteLaptopMutation,
    useUpdateLaptopMutation,
} from "@/store/api/apiLaptops"
import Button from "@/modules/ui/button/Button"
import { createPortal } from "react-dom"
import DetailImages from "../detailImages/DetailImages"
import DetailInfo from "../detailInfo/DetailInfo"

const DetailModal = () => {
    const dispatch = useAppDispatch()
    const { isOpen, selectedProduct } = useDetail()
    const { isEditMode, editingProduct } = useEdit()
    const [updateLaptop, { isLoading: isUpdating }] = useUpdateLaptopMutation()
    const [deleteLaptop, { isLoading: isDeleting }] = useDeleteLaptopMutation()

    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const [editForm, setEditForm] = useState({
        name: "",
        price: "",
    })

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll")
        } else {
            document.body.classList.remove("no-scroll")
            dispatch(stopEditing())
        }

        return () => {
            document.body.classList.remove("no-scroll")
        }
    }, [isOpen, dispatch])

    useEffect(() => {
        if (editingProduct) {
            setEditForm({
                name: editingProduct.name,
                price: editingProduct.price.toString(),
            })
        }
    }, [editingProduct])

    if (!isOpen || !selectedProduct) return null

    const { name, images } =
        isEditMode && editingProduct ? editingProduct : selectedProduct

    const handleClose = () => {
        dispatch(closeDetail())
        setSelectedImageIndex(0)
        dispatch(stopEditing())
    }

    const handleAddToCart = () => {
        const product =
            isEditMode && editingProduct ? editingProduct : selectedProduct
        dispatch(addToCart(product))
    }

    const handlePickImage = (index: number) => {
        setSelectedImageIndex(index)
    }

    const handleEdit = () => {
        dispatch(startEditing(selectedProduct))
    }

    const handleCancelEdit = () => {
        dispatch(stopEditing())
        setEditForm({
            name: selectedProduct.name,
            price: selectedProduct.price.toString(),
        })
    }

    const handleSaveEdit = async () => {
        if (!editingProduct) return

        try {
            const updatedProduct = {
                ...editingProduct,
                name: editForm.name,
                price: Number(editForm.price),
            }

            await updateLaptop(updatedProduct).unwrap()
            dispatch(stopEditing())
        } catch (error) {
            console.error("Ошибка при обновлении товара:", error)
        }
    }

    const handleDelete = async () => {
        if (!confirm("Вы уверены, что хотите удалить этот товар?")) return

        try {
            await deleteLaptop(selectedProduct.id).unwrap()
            handleClose()
        } catch (error) {
            console.error("Ошибка при удалении товара:", error)
        }
    }

    const handleEditFormChange = (field: string, value: string) => {
        setEditForm((prev) => ({
            ...prev,
            [field]: value,
        }))

        if (editingProduct) {
            dispatch(
                updateEditingProduct({
                    [field]: field === "price" ? Number(value) : value,
                }),
            )
        }
    }
    // prettier-ignore
    return createPortal(
        <>
            <div className={s.overlay} onClick={handleClose} />

            <div className={s.modal}>
                <div className={s.header}>
                    <h2>
                        {name}
                    </h2>
                    <Button className={s.closeButton} onClick={handleClose}>
                        ×
                    </Button>
                </div>
                <div className={s.content}>
                    <DetailImages
                        images={images}
                        selectedImageIndex={selectedImageIndex}
                        handlePickImage={handlePickImage}
                        productName={name}
                    />
                    
                    <div className={s.infoSection}>
                        {isEditMode && editingProduct ? (
                            <div className={s.editMode}>
                                <div className={s.editForm}>
                                    <div className={s.formGroup}>
                                        <label>Название</label>
                                        <input
                                            type="text"
                                            value={editForm.name}
                                            onChange={(e) => handleEditFormChange('name', e.target.value)}
                                            className={s.editInput}
                                        />
                                    </div>
                                    <div className={s.formGroup}>
                                        <label>Цена</label>
                                        <input
                                            type="number"
                                            value={editForm.price}
                                            onChange={(e) => handleEditFormChange('price', e.target.value)}
                                            className={s.editInput}
                                        />
                                    </div>
                                </div>
                                <div className={s.editActions}>
                                    <Button variable={1} onClick={handleCancelEdit} disabled={isUpdating}>
                                        Отмена
                                    </Button>
                                    <Button variable={2} onClick={handleSaveEdit} disabled={isUpdating}>
                                        {isUpdating ? "Сохранение..." : "Сохранить"}
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <DetailInfo
                                    {...(isEditMode && editingProduct ? editingProduct : selectedProduct)}
                                    handleAddToCart={handleAddToCart}
                                    showAddToCart={true}
                                />
                                <div className={s.adminActions}>
                                    <Button variable={1} onClick={handleEdit}>
                                        Редактировать
                                    </Button>
                                    <Button 
                                        onClick={handleDelete} 
                                        disabled={isDeleting}
                                        className={s.deleteButton}
                                    >
                                        {isDeleting ? "Удаление..." : "Удалить товар"}
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>,
        document.body,
    )
}

export default DetailModal
