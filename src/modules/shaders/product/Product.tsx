import React from "react"
import s from "./product.module.scss"
import { Laptop } from "@/types/typeLaptop"
import Button from "@/modules/ui/button/Button"
import { useAppDispatch } from "@/hooks/useApp"
import { addToCart } from "@/store/slices/cartSlice"
import { openDetail } from "@/store/slices/detailSlcie"

const Product = ({
    id,
    name,
    description,
    price,
    currency,
    category,
    brand,
    images,
    specifications,
}: Laptop) => {
    const dispatch = useAppDispatch()

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id,
                name,
                description,
                price,
                currency,
                images,
                category,
                brand,
                specifications,
            }),
        )
    }
    const handleOpenDetails = () => {
        dispatch(
            openDetail({
                id,
                name,
                description,
                price,
                currency,
                images,
                category,
                brand,
                specifications,
            }),
        )
    }

    return (
        <div className={s.card}>
            <div className={s.wrapperImg}>
                <img className={s.img} src={images[0]} alt="" />
            </div>
            <div className={s.descriptionWrapper}>
                <h3 className={s.title}>{name}</h3>
                <div>
                    <p className={s.description}>{description}</p>
                    <div className={s.priceWrapper}>
                        <Button variable={1} onClick={handleOpenDetails}>
                            Подробнее
                        </Button>
                        <div className={s.price}>
                            {price} {currency}
                        </div>
                    </div>
                    <Button variable={2} onClick={handleAddToCart}>
                        В корзину
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Product
