import React, { Component } from 'react';

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            title : "Menu Makanan",
            minuman : "Menu Minuman"
        }
        this.ubahData = this.ubahData.bind(this);
        this.handleChange = this.handleChange.bind(this)
    };

    // ubahData(){
    //     this.setState({title : "Pilih Makanan"})
    // }

    ubahData(){
        this.setState((state, props)=>{
            return{
                title : state.minuman,
                minuman : state.title
            }
        })
    }

    handleChange(e){
        console.log(e.target.value);
    }
    render() {
        return(
            <div>
                <h3>{this.state.title}</h3>
                <h2>{this.state.minuman}</h2>
                <button onClick={this.ubahData}>Ubah</button><br></br>
                <br></br>
                <input type="text" onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default Main;