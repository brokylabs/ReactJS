import React, { Component } from 'react';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            menuMakanan : "Menu Makanan",
            menuMinuman : "Menu Minuman"
        };
        this.ubahMenu = this.ubahMenu.bind(this)
    }

    ubahMenu(){
        // this.setState({ menuMakanan : "Menu Makanan Nusantara"})

        this.setState((state, props)=>{
            return({
                menuMakanan : state.menuMinuman,
                menuMinuman : state.menuMakanan
            })
        })
    }

    render(){
        return(
            <div>
                <h2>{this.state.menuMakanan}</h2>
                <h3>{this.state.menuMinuman}</h3>
                <button onClick ={this.ubahMenu} href="/">Change</button><br></br>
            </div>
        )
    }
}

export default Main;