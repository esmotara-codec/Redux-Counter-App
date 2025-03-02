import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement =() => {
        setCount((count) => count + 1);
    }
    return (
        <div className='mt-6 font-bold'>
            <h1>Counter App</h1>

            <h4>Count : {count}</h4>
            <button
            onClick={handleIncrement} 
            className="btn btn-success">Increment</button>
        </div>
    );
};

export default Counter;