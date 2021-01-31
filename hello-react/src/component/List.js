import React, { Component } from 'react';
import Image from "./Image"

class List extends Component{
    render(){
        return(
            <ul>
                <Image/>
                <li>Nasi Padang</li>
                <li>Nasi Bebek</li>
                <li>Nasi Uduk</li>
            </ul>
        )
    }
}

export default List;