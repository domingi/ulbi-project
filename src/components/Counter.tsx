import { useState } from 'react';
import './style.scss';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
        <div>
            <span className='counter'>{counter}</span>
        </div><div>
                <button onClick={() => setCounter((prev) => prev += 1)}>Увеличить!</button>
            </div>
        </>
    )
};

export default Counter;