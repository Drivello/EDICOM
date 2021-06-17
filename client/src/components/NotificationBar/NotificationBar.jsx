import { stripTrailingSlash } from 'history/PathUtils'
import React, { useState, useEffect } from 'react'
import styles from "./NotificationBar.module.css"

const NotificationBar = () => {

    const notification = {
        date: "16/08/2020",
        subject: "Reclamo caño roto",
        importance: "Alta",
        building: "Donnelly Group"
    }

    const notification2 = {
        date: "10/08/2020",
        subject: "Reclamo no hay wifi",
        importance: "Media",
        building: "Donnelly Group"
    }

    const test = [notification, notification2];



    return (
        <div className={styles.box}>
            <div className={styles.cont}>
                <div className={styles.items}>
                    {test.map((noti) => {
                        return (
                            <div className={styles.item}>
                                <div className={styles.subj}>
                                    {noti.subject}
                                </div>
                                <div className={styles.data}>
                                    <div>
                                        <div className={styles.importance}>
                                            Importancia: {noti.importance}
                                        </div>
                                        <div className={styles.building}>
                                            Edificio: {noti.building}
                                        </div>
                                    </div>
                                    <div className={styles.date}>
                                        {noti.date}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}


export default NotificationBar;