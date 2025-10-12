import React from "react"
import s from "./detailSpecification.module.scss"

interface DetailSpecificationProps {
    groupKey: string
    groupData: string
}

const DetailSpecification = ({
    groupKey,
    groupData,
}: DetailSpecificationProps) => {
    return (
        <div className={s.specGroup}>
            <div className={s.specGroupTitle}>{groupKey}:</div>
            <div className={s.specSubList}>
                {Object.entries(groupData).map(([subKey, subValue]) => (
                    <div key={subKey} className={s.specItem}>
                        <span className={s.specKey}>{subKey}:</span>
                        <span className={s.specValue}>
                            {typeof subValue === "boolean"
                                ? subValue
                                    ? "Да"
                                    : "Нет"
                                : String(subValue)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DetailSpecification
