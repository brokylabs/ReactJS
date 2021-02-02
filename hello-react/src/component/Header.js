import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      daftar : "Daftar makanan Nusantara",
      dataList : this.props.List
    };
    this.handlePesan = this.handlePesan.bind(this)
  }

  handlePesan(value){
    alert(this.state.dataList)
    alert(value)
  }

    render() {
      return(
        <div>
          <h2>Makanan Khas Indonesia</h2>
          <p>{this.state.daftar}</p>
          <p>{this.state.dataList}</p>
          <a href="/" onClick={()=>this.handlePesan("Pesan Header")}>Halaman Header!</a>
        </div>
      )
    }
  }

  export default Header;