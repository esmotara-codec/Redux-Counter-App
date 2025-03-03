import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterActions';

const Counter = () => {
   const count = useSelector(state => state.count);

   const dispatch =useDispatch();
    const handleIncrement =() => {
        dispatch(incrementCounter());
       
    };
    const handleDecrement =() => {
        dispatch(decrementCounter());
       
    };
    const handleReset =() => {
        dispatch(resetCounter());
       
    };
    return (
        <div className='mt-6 font-bold'>
            <h1>Counter App</h1>

            <h4>Count : { count}</h4>
           <div>
           <button
            onClick={handleIncrement} 
            className="btn btn-success mt-5 mx-10">Increment</button>
           </div>
           <div>
           <button
            onClick={handleDecrement} 
            className="btn btn-success mt-5  mx-10">Decrement</button>
           </div>
            <div>
            <button
            onClick={handleReset} 
            className="btn btn-success  mt-5 mx-10">Reset</button>
            </div>
        </div>
    );
};

export default Counter;