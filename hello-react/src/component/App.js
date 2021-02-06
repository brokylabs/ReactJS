import React, { Component } from 'react';
import Header from "./Header"
import Top from "./Top"
// import Main from "./Main"
import Form from "./Form"
// import List from "./List"
import Footer from "./Footer"


class App extends Component {
  render() {
    return (
      <div>
        <Header List="3 Terbaik"/>
        <Top/>
        <Form/>
        {/* <Main/> */}
        {/* <List/> */}
        <Footer name="Makanan Nusantara" tahun="2021"/>
      </div>
    )
  }
}


export default App;
