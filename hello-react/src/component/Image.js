import React, { Component } from 'react';

class Image extends Component{
    render(){
        return(
            <img 
            src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"
            alt="Gambar-Makanan"
            width="400"></img>
        )
    }
}

export default Image;