import React, { Component } from 'react';
import Header from "./Header"

const Footer = ()=>{
  return(
    <div>
      <h2>Halaman Footer</h2>
      <p>2021</p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>Render Element</h1>
        <Footer/>
      </div>
    )
  }
}


export default App;
