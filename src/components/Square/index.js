import React, { useState } from 'react';
import styles from './index.module.css';
const Square = (props) => {
    const [status, setStatus] = useState(false);
    return (
        <div>
            <button className={styles.square} onClick={() => props.handlePlay()} >{ props.value }</button>
        </div>
    )
}

export default Square