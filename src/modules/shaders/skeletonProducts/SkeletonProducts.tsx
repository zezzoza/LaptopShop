import React from "react"
import s from "./skeletonProducts.module.scss"

const SkeletonProducts = () => {
    return (
        <div className={s.card}>
            <div className={s.wrapperImg}>
                <div className={s.skeletonImage}></div>
            </div>
            <div className={s.descriptionWrapper}>
                <div className={s.skeletonTitle}></div>
                <div>
                    <div className={s.skeletonDescription}></div>
                    <div className={s.priceWrapper}>
                        <div className={s.skeletonButton}></div>
                        <div className={s.skeletonPrice}></div>
                    </div>
                    <div className={s.skeletonCartButton}></div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonProducts
