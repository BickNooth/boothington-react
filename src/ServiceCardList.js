import React from 'react';
import { ServiceCard } from "./ServiceCard";

const demoCards = [
    { icon:'house-damage', text:'Damaged Home Text'},
    { icon:'dungeon', text:'Dungeon Text'},
    { icon:'home', text:'Tempor cillum anim id qui sint nulla est aliqua labore. Ullamco minim est quis consectetur reprehenderit reprehenderit.'},
    { icon:'snowflake', text:'Snowflake Text'}
];

function ServiceCardList({ cards }){
    if (typeof cards === 'undefined'){
        cards = demoCards;
    }
    console.table(cards);
    return(
        <div>
            <ul>
                {(cards || []).map((card, index) =>(
                    <li key={index}>
                        <ServiceCard icon={card.icon} text={card.text} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ServiceCardList;
