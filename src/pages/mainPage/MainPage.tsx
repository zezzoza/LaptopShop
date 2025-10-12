"use client"
import React from "react"
import s from "./mainPage.module.scss"

import ListProducts from "@/modules/shaders/listProducts/ListProducts"
import { useGetAllLaptopsQuery } from "@/store/api/apiLaptops"
import Header from "@/modules/shaders/header/Header"
import FilteringAndSorting from "@/modules/shaders/filteringAndSorting/FilteringAndSorting"
import DetailModal from "@/modules/shaders/detailModal/DetailModal"
import SkeletonProducts from "@/modules/shaders/skeletonProducts/SkeletonProducts"

const MainPage = () => {
    const { data, isLoading, error } = useGetAllLaptopsQuery()

    return (
        <div className={s.flexWrapper}>
            <Header />
            <div className={s.wrapper}>
                <FilteringAndSorting data={data} />
                {isLoading ? (
                    <div className={s.skeletonWrapper}>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <SkeletonProducts key={index} />
                        ))}
                    </div>
                ) : data ? (
                    <ListProducts data={data} error={error} />
                ) : (
                    <div>Нет данных</div>
                )}
            </div>
            <DetailModal />
        </div>
    )
}

export default MainPage
