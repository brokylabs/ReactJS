import React, { Component } from 'react';

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            title : "Menu Makanan"
        }
        this.ubahData = this.ubahData.bind(this);
    };

    ubahData(){
        this.setState({title : "Pilih Makanan"})
    }

    render() {
        return(
            <div>
                <h3>{this.state.title}</h3>
                <button onClick={this.ubahData}>Ubah</button>
            </div>
        )
    }
}

export default Main;