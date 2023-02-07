import { useState } from "react";
import Child from "./Child";


export default function Parent(){

    const[Parentcount, setParentCount] = useState(0);
    const[childcount, setChildCount] = useState(0);

    const changeParentCount = ()=>{
        setParentCount(Parentcount+1);   
    }

    const changeChildCount = ()=>{
        setChildCount(childcount+1);   
    }

    return(
        <div> Parent Component 
            <h1>Parent Count is: {Parentcount}</h1>
            <Child child={childcount}></Child>

            <button onClick={changeParentCount}>Incremenet parent count</button>
            <button onClick={changeChildCount}>Incremenet child count</button>

        </div>
    )
}