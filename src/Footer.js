import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Footer.module.scss'

export const Footer = function () {
    return (
        <footer>
            <div className={styles.socials}>
                <h3>Follow us:</h3>
                <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                <FontAwesomeIcon icon={['fab', 'twitter-square']} />
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                <FontAwesomeIcon icon={['fab', 'youtube-square']} />
            </div>
        </footer>
    )
}