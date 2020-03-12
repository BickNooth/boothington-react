import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ServiceCard(props) {
    return(
        <div>
            <FontAwesomeIcon icon={props.icon} />
            <h2>{props.text}</h2>
        </div>
    )
}

export default ServiceCard;