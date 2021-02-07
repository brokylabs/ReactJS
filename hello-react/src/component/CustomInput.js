import React, { Component } from 'react';

class CustonInput extends Component{
    constructor(props){
        super(props)
        this.state = {
            value  : "Input Value"
        }
        this.handleInput = this.handleInput.bind(this)
        this.clearInput = React.createRef()
    }

    handleInput(){
        this.setState({ value : ""})
        this.clearInput.current.focus()
    }

    render(){
        return (
            <div>
                <input type="text" value={this.state.value} ref={this.clearInput}></input>

                <button onClick={this.handleInput}>Clear Text</button>
            </div>
        )
    }
}


export default CustonInput;