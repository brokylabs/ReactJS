import React, { Component } from 'react';
import "./Header.css"
let judul = {
  color: "navajowhite",
  backgroundColor : "olivedrab",
  marginTop : "100px"
}

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      daftar : "Daftar makanan Nusantara",
      dataList : this.props.List,
      statusRender : false
    };
    this.handlePesan = this.handlePesan.bind(this)
    this.handleElement = this.handleElement.bind(this)
  }

  handlePesan(value, e){
    e.preventDefault()
    alert(this.state.dataList)
    alert(value)
  }

  componentDidMount(){
    console.log("componentDidMount : run...");
  }

  handleElement(){
    this.setState((state, props)=>{
      return({
        statusRender : !state.statusRender
      })
    })
  }

  render() {
    // console.log("render : Run...");
    console.log(this.state.statusRender);
    return(
      <div>
        {this.state.statusRender === true ? (
          <div>
            <h1 style={{color:"navajowhite", backgroundColor:"olivedrab", marginTop:"100px"}}>Selamat Datang</h1>
            <h2 style={judul}>Silahkan Pilih Makanan</h2>
          </div>
        ): (
          <div>
            <h1 id="JudulKedua">Selamat Tinggal</h1>
            <h2>Jangan Lupa Datang Lagi</h2>
          </div>
        )}
        <button onClick={this.handleElement}>Change</button>
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