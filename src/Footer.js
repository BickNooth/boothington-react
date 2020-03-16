import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Footer.module.scss'

export const Footer = function () {
    return (
        <footer>
            <div className={styles.socials}>
                <h3 className={styles.h3}>Follow us:</h3>
                <FontAwesomeIcon icon={['fab', 'facebook-square']} className={styles.svg}/>
                <FontAwesomeIcon icon={['fab', 'twitter-square']} className={styles.svg}/>
                <FontAwesomeIcon icon={['fab', 'linkedin']} className={styles.svg}/>
                <FontAwesomeIcon icon={['fab', 'youtube-square']} className={styles.svg}/>
            </div>
        </footer>
    )
}