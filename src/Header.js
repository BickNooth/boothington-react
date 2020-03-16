import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss'

function Header(){
    return(
        <nav className={styles.nav}>
            <FontAwesomeIcon icon='bars' className={styles.hamburgerIcon} />
            <FontAwesomeIcon icon='dragon' className={styles.brandLogo} />
            <p className={styles.brandName}>Boothington Borough Council</p>
            <FontAwesomeIcon icon='search' className={styles.searchIcon} />
            <div>
                <a href='/Pay'>Pay</a>
            </div>
            <div>
                <a href='/Apply'>Apply</a>
            </div>
            <div>
                <a href='/Report'>Report</a>
            </div>
        </nav>
    )
}

export default Header;