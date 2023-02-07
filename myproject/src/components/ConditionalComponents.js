import { useState } from "react"

export default function CondtionalComponent(){

    const [display, setDisplay] = useState(true); //setState
   

    // #1 USING CONDITIONAL COMPONENTS 

    // if(display){
    //     return(
    //         <div> 
    //             <h3>This is a conditional component </h3>
    //         </div>
    //     );
    // }
    // else{
    //     return(
    //         <div> 
    //            <h3> Nothing to see here </h3>
    //         </div>
    //     );
    // }


    //#2 USING ELEMENT VARIABLE

    // let output; // element variable

    // if(display){
    //   output = <h3>This is a conditional component </h3>;
    // }
    // else{
    //     output =  <h3> Nothing to see here </h3>;
    // }

    // return <div>{output}</div>


    // #3 USING Ternary Components

    return display ? ( // ? checks the value of display then execute the value before the colon, else if false executes the value after the colon 
        <div> 1 </div>
    ) : (
        <div> 2 </div>
    );
}