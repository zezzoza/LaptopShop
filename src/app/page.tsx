"use client"
import MainPage from "@/pages/mainPage/MainPage"
import styles from "./page.module.scss"
import { Provider } from "react-redux"
import { store } from "@/store/store"

export default function Home() {
    return (
        <div className={styles.page}>
            <Provider store={store}>
                <MainPage />
            </Provider>
        </div>
    )
}
