import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./ServiceCard.module.scss";

export const ServiceCard = function (props) {
    console.log(`Service Card func, props.icon:${props.icon}`)

    return(
        <div className={styles['card-container']}>
            <div className={`fa-3x ${styles['icon-holder']}`}>
                <FontAwesomeIcon icon={props.icon} />
            </div>
            <h2 className={styles.cardtext}>{props.text}</h2>
        </div>
    )
}
