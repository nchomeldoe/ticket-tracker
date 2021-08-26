import React, { useState } from 'react';
import styles from "./Counter.module.scss";

const Counter = () => {
    const [ticketCount, setTicketCount] = useState(0);
    return (
        <div className={styles.counter}>
            <h3>Counter</h3>
            <p>{ticketCount}</p>
            <button onClick={() => (setTicketCount(ticketCount === 0 ? ticketCount : ticketCount-1))}>-</button>
            <button onClick={() => (setTicketCount(ticketCount+1))}>+</button>
        </div>
    )
}

export default Counter
