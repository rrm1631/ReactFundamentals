import React from "react";

function Child({child}){

    console.log("Child is being rerendered");

    return(
        <div> Child Count is: {child}</div>
    )
}

export default React.memo(Child);

