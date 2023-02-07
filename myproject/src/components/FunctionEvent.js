function FunctionEvent() {

    function handleClick(){
        console.log("It Works");
    }

    return (
        <div>
            Functional Component
            <button onClick={handleClick}>Click here!</button>
        </div>
    );
}

export default FunctionEvent;