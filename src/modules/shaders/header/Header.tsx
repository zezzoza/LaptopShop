import React from "react"
import s from "./heade.module.scss"
import Pagination from "../pagination/Pagination"
import Search from "../search/Search"
import CartIcon from "../cartIcon/CartIcon"
import CartSidebar from "../cartSidebar/CartSidebar"

const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.mobileLayout}>
                <div className={s.searchColumn}>
                    <Search />
                    <Pagination />
                </div>
                <CartIcon />
            </div>
            <CartSidebar />
        </div>
    )
}

export default Header
