import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.scss'


function header(){
    return(
        <header>
            <FontAwesomeIcon icon='bars' className='hamburger-menu__icon' />
            <FontAwesomeIcon icon='dragon' className='brand__logo' />
            <p className="brand__name">Boothington Borough Council</p>
        </header>
    )
}

export default header;