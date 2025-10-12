import React from "react"
import s from "./listProducts.module.scss"
import Product from "../product/Product"
import { usePagination } from "@/hooks/usePagination"
import { Laptop } from "@/types/typeLaptop"
import { useProducts } from "@/hooks/useProducts"
import DetailModal from "../detailModal/DetailModal"
import SkeletonProducts from "../skeletonProducts/SkeletonProducts"

const ListProducts = ({ data, error }: { data: Laptop[]; error?: any }) => {
    const { paginationLaptops } = useProducts(data)

    if (error) return <div className={s.error}>Ошибка загрузки</div>

    return (
        <div className={s.wrapper}>
            {paginationLaptops.map((laptop) => (
                <Product key={laptop.id} {...laptop} />
            ))}
        </div>
    )
}

export default ListProducts
