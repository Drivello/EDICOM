import { stripTrailingSlash } from 'history/PathUtils';
import React, { useState, useEffect } from 'react';
import styles from "./NotificationBar.module.css";
import { getComplaints } from "../../redux/complaints/complaintsActions";
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

const NotificationBar = (props) => {

    let Notifications = props.notifications;
    Notifications = Notifications.filter(noti => { if (noti.seen === false) return true })
    Notifications = Notifications.slice(Notifications.length - 4);

    return (
        <div className={styles.box}>
            <div className={styles.cont}>
                <div className={styles.items}>
                    {Notifications?.map((noti) => {
                        return (
                            <div className={styles.item} key={noti.id} >
                                <div className={styles.subj}>
                                    {noti.subject}
                                </div>
                                <div className={styles.data}>
                                    <div>
                                        <div className={styles.importance}>
                                            Importancia: {noti.importance}
                                        </div>
                                        <div className={styles.building}>
                                            Edificio: {noti.building.name}
                                        </div>
                                    </div>
                                    <div className={styles.date}>
                                        {moment(noti.date).format("DD/MM/YYYY")}
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