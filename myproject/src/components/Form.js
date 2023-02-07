import { Component } from "react";

class Form extends Component{

    state={
        firstname: "",
        lastname: "",
    }

    handleChange = (event)=>{
        this.setState({
            firstname: event.target.value,
        })

        // console.log(this.firstname);
    };

    handleLastName = (event)=>{
        this.setState({
            lastname: event.target.value,
        })
    };

    handleSubmit = (event)=>{
        event.preventDefault();
        
        console.log({
            fname: this.state.firstname,
            lname: this.state.lastname,
        })
    };

    render(){
        return (<div> Form
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.firstname}></input>
                <input type="text" onChange={this.handleLastName} value={this.state.lastname}></input>

                <button type="submit"> Submit </button>
            </form>

            <br></br>
        </div>)
    }
}

export default Form;