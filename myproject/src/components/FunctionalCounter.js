import { useState } from "react";

function FunctionalCounter() {
    
    // useState will create a state for the variable counter and 
    // creates a function called setCounter which is responsible for changing the value of counter
    // setCounter is user defined

    //syntax const [varname, functionname] = useState(value)
    const [counter, setCounter] = useState(0); 

    function increment(){
        setCounter(counter + 1);
    }

    function decrement(){
        setCounter(counter - 1);
    }

   return (
    <div>
        <div> Counter Value 2: {counter}</div>
        <div> 
            <button onClick={increment}> increment </button>
            <button onClick={decrement}> decrement </button> 
        </div>
    </div>
   )
}

export default FunctionalCounter;