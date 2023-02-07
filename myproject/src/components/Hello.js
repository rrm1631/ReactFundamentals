
let name = "Raph";

function displayMessage() {
    return "I need help";
}


// Function Component 
function Hello() {
    return <h1> Hello, {displayMessage()}</h1>;
}

// ES6 syntax
// const Hello = ()=> <h1> Hello World!</h1>;

export default Hello;