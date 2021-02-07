import React, { Component } from 'react';

class Image extends Component{
    render(){
        return(
            <img 
            src={this.props.linkGambar}
            alt="Gambar-Makanan"
            width={this.props.lebar}></img>
        )
    }
}

export default Image;