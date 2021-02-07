import React, { Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            submitData : ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    handleChange(e){
        this.setState({ submitData : e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        alert("Hello : " + this.state.submitData)
    }


    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.submitData} onChange={this.handleChange}></input>
                <input type="submit" value="Submit Data"></input>
            </form>
        )
    }
};


export default Form;