 import React, { Component } from 'react';
import Image from "./Image"

class List extends Component{
    render(){
        return(
            <ul>
                <Image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" lebar="200"/>
                <li>Nasi Padang</li>
                <Image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" lebar="200"/>
                <li>Sate Klatak</li>
                <Image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" lebar="200"/>
                <li>Soto Lamongan</li>
                <Image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" lebar="200"/>
            </ul>
        )
    }
}

export default List;