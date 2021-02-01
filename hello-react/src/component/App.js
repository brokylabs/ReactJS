import React, { Component } from 'react';
import Header from "./Header"
import Footer from "./Footer"
import List from "./List"
class App extends Component {
  render() {
    return (
      <div>
        <Header List="3 Terbaik"/>
        <List/>
        <Footer name="Makanan Nusantara" tahun="2021"/>
      </div>
    )
  }
}


export default App;
