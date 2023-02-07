import { Component } from "react";

class ClassEvent extends Component{

    handleClick(){
        console.log("It Works");
    }

    render(){
        return  <div> 
                    This is a class based Component
                    <button onClick={this.handleClick}> Click!</button>
                </div>
    }
}

export default ClassEvent;