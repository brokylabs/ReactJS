import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      daftar : "Daftar makanan Nusantara",
      dataList : this.props.List
    };
    this.pesanHeader = this.pesanHeader.bind(this)

  }

  pesanHeader(pesan, e){
    e.preventDefault()
    alert(this.state.dataList)
    alert(pesan)
  }
    render() {
      return(
        <div>
          <h2>Makanan Khas Indonesia</h2>
          <p>{this.state.daftar}</p>
          <p>{this.state.dataList}</p>
          <a href="/" onClick={(e)=>this.pesanHeader("Pesan dari Header", e)}>Pesan Header</a>
        </div>
      )
    }
  }

  export default Header;