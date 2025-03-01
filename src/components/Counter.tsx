import { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
        <div>
            <span className={styles.counter23}>{counter}</span>
        </div><div>
                <button onClick={() => setCounter((prev) => prev += 1)}>Увеличить!</button>
            </div>
        </>
    )
};

export default Counter;