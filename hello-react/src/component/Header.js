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

  handlePesan(value, e){
    e.preventDefault()
    alert(this.state.dataList)
    alert(value)
  }

  componentDidMount(){
    console.log("componentDidMount : run...");
  }

    render() {
      console.log("Render : run...");
      return(
        <div>
          <h2>Makanan Khas Indonesia</h2>
          <p>{this.state.daftar}</p>
          <p>{this.state.dataList}</p>
          <a href="/" onClick={(e)=>this.handlePesan("Pesan Header", e)}>Halaman Header!</a>
        </div>
      )
    }
  }

  export default Header;