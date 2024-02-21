import React, {useState} from "react";

function Counter(){
    let [count, setCount] = useState(0);

    const incCount = () => {
        setCount(count + 1);
    }

    const decCount = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="counter-display">{count}</p>
            <button className="counter-button" onClick={incCount}>Increase</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={decCount}>Decrease</button>
        </div>
    );
}

export default Counter;