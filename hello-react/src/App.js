import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div>
        <h2>Makanan Khas Indonesia</h2>
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>Render Element</h1>
      </div>
    )
  }
}


export default App;
