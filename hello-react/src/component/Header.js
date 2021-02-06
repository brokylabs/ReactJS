import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      daftar : "Daftar makanan Nusantara",
      dataList : this.props.List,
      statusRender : false
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
    return(
      <div>
        {this.state.statusRender === true ? (
          <h1>Selamat Datang</h1>
        ): (
          <h1>Selamat Tinggal</h1>
        )}
      </div>
    )
  }
}

  //   render() {
  //     console.log("Render : run...");
  //     return(
  //       <div>
  //         <h2>Makanan Khas Indonesia</h2>
  //         <p>{this.state.daftar}</p>
  //         <p>{this.state.dataList}</p>
  //         <a href="/" onClick={(e)=>this.handlePesan("Pesan Header", e)}>Halaman Header!</a>
  //       </div>
  //     )
  //   }
  // }

  export default Header;