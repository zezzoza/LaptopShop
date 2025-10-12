import React from "react"
import s from "./detailImages.module.scss"
import Button from "@/modules/ui/button/Button"

interface DetailImagesProps {
    images: string[]
    selectedImageIndex: number
    handlePickImage: (index: number) => void
    productName: string
}

const DetailImages = ({
    images,
    selectedImageIndex,
    handlePickImage,
    productName,
}: DetailImagesProps) => {
    return (
        <div className={s.imagesSection}>
            <div className={s.mainImage}>
                <img src={images[selectedImageIndex]} alt={productName} />
            </div>
            {images.length > 1 && (
                <div className={s.thumbnails}>
                    {images.map((image, index) => (
                        <Button
                            key={index}
                            className={`${s.thumbnail} ${
                                index === selectedImageIndex ? s.active : ""
                            }`}
                            onClick={() => handlePickImage(index)}
                        >
                            <img
                                src={image}
                                alt={`${productName} ${index + 1}`}
                            />
                        </Button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DetailImages
