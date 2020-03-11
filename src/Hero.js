import React, { useState } from 'react';

function Hero(){
    const [searchText, setSearchText] = useState('');

    

    return(
        <div className='hero--container'>
            <h2>Welcome To</h2>
            <h1>Boothington Borough Council</h1>
            <div>How can we help you today?</div>
            <div className='hero-search--container'>
                <div className='hero-search__input'></div>
            </div>
        </div>
    )
}

export default Hero;