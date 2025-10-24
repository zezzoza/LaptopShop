import React from "react"
import s from "./detailInfo.module.scss"
import { Laptop } from "@/types/typeLaptop"
import Button from "@/modules/ui/button/Button"
import DetailSpecification from "../detailSpecification/DetailSpecification"

interface DetailInfoProps extends Laptop {
    handleAddToCart: () => void
}

const DetailInfo = ({
    price,
    currency,
    brand,
    category,
    description,
    specifications,
    handleAddToCart,
}: DetailInfoProps) => {
    return (
        <div className={s.infoSection}>
            <div className={s.basicInfo}>
                <div className={s.price}>
                    {price} {currency}
                </div>
                <div className={s.brandCategory}>
                    <span>{brand}</span>
                    <span>{category}</span>
                </div>
            </div>

            <div className={s.description}>
                <h4>Описание</h4>
                <p>{description}</p>
            </div>

            <div className={s.specifications}>
                <h4>Характеристики</h4>
                <div className={s.specsList}>
                    {Object.entries(specifications).map(([key, value]) => {
                        if (typeof value === "object" && value !== null) {
                            return (
                                <DetailSpecification
                                    key={key}
                                    groupKey={key}
                                    groupData={value}
                                />
                            )
                        }
                        return null
                    })}
                </div>
            </div>
            <div>
                <Button variable={2} onClick={handleAddToCart}>
                    Добавить в корзину
                </Button>
            </div>
        </div>
    )
}

export default DetailInfo
