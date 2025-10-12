import React from "react"
import s from "./notFound.module.scss"
import Link from "next/link"
import Button from "@/modules/ui/button/Button"

const NotFound = () => {
    return (
        <div className={s.minimalContainer}>
            <div className={s.minimalContent}>
                <div className={s.minimalErrorCode}>404</div>
                <h1 className={s.minimalTitle}>Страница не найдена</h1>
                <p className={s.minimalDescription}>
                    Запрашиваемая страница не существует.
                </p>
                <Link href="/">
                    <Button variable={1}>На главную</Button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
