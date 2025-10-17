import React from "react"
import s from "./heade.module.scss"
import Pagination from "../pagination/Pagination"
import Search from "../search/Search"
import CartIcon from "../cartIcon/CartIcon"
import CartSidebar from "../cartSidebar/CartSidebar"
import AddProductModal from "../addProductModal/AddProductModal"
import AddProductButton from "../addProductButton/AddProductButton"

const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.mobileLayout}>
                <div className={s.searchColumn}>
                    <Search />
                    <Pagination />
                </div>
                <div className={s.actions}>
                    <AddProductButton />
                    <CartIcon />
                </div>
            </div>
            <CartSidebar />
            <AddProductModal />
        </div>
    )
}

export default Header
