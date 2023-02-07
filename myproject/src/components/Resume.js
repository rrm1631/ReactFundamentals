import { Component } from "react";

class Resume extends Component{
    render(){
        // Destructure
        const {name} = this.props;
        return <h1> This is a class component: {name}</h1>
    }
}

export default Resume;