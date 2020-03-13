import React from 'react';
import { useInput } from './hooks/useInput'
import styles from './Hero.module.scss'

function Hero(){
    const { value, bind } = useInput('');

    return(
        <div className={styles.hero__container} onClick={() => (console.log(value))}>
            <h2>Welcome To</h2>
            <h1>Boothington Borough Council</h1>
            <div>How can we help you today?</div>
            <div className='hero-search--container'>
                <label>Label</label>
                <input type='text'
                    name='searchText'
                    value={value}
                    {...bind} 
                />
            </div>
        </div>
    )
}

export default Hero;