import React, { Link } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Nav.scss'


function Nav(){
    return(
        <nav>
            <FontAwesomeIcon icon='bars' className='hamburger-menu__icon' />
            <FontAwesomeIcon icon='dragon' className='brand__logo' />
            <p className="brand__name">Boothington Borough Council</p>
            <FontAwesomeIcon icon='search' className='search__icon' />
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

export default Nav;