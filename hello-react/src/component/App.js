import React, { Component } from 'react';
import Header from "./Header"
import Footer from "./Footer"
import List from "./List"
import Top from "./Top"
import Main from "./Main"
class App extends Component {
  render() {
    return (
      <div>
        <Header List="3 Terbaik"/>
        <Top/>
        <Main/>
        <List/>
        <Footer name="Makanan Nusantara" tahun="2021"/>
      </div>
    )
  }
}


export default App;
