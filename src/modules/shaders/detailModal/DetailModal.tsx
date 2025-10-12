// prettier-ignore
import React, { useEffect, useState } from "react"
import s from "./detailModal.module.scss"
import { useAppDispatch } from "@/hooks/useApp"
import { useDetail } from "@/hooks/useDetail"
import { closeDetail } from "@/store/slices/detailSlcie"
import { addToCart } from "@/store/slices/cartSlice"
import Button from "@/modules/ui/button/Button"
import { createPortal } from "react-dom"
import DetailImages from "../detailImages/DetailImages"
import DetailInfo from "../detailInfo/DetailInfo"

const DetailModal = () => {
    const dispatch = useAppDispatch()
    const { isOpen, selectedProduct } = useDetail()
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll")
        } else {
            document.body.classList.remove("no-scroll")
        }

        return () => {
            document.body.classList.remove("no-scroll")
        }
    }, [isOpen])

    if (!isOpen || !selectedProduct) return null

    const { name, images } = selectedProduct

    const handleClose = () => {
        dispatch(closeDetail())
        setSelectedImageIndex(0)
    }

    const handleAddToCart = () => {
        dispatch(addToCart(selectedProduct))
    }

    const handlePickImage = (index: number) => {
        setSelectedImageIndex(index)
    }

    return createPortal(
        <>
            <div className={s.overlay} onClick={handleClose} />

            <div className={s.modal}>
                <div className={s.header}>
                    <h2>{name}</h2>
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
                    <DetailInfo
                        {...selectedProduct}
                        handleAddToCart={handleAddToCart}
                    />
                </div>
            </div>
        </>,
        document.body,
    )
}

export default DetailModal
