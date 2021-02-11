import React, { Component } from 'react';
import axios from "axios"
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataApi : []
    }
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleReload(){
    axios.get("http://localhost:3005/posts").then(res => {
        this.setState({ dataApi : res.data })
        // console.log(res.data);
      })
  }

  handleRemove(e){
    console.log(e.target.value);
    fetch(`http://localhost:3005/posts/${e.target.value}`, {method : "DELETE" }).then(res => this.handleReload())
  }

  componentDidMount(){
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then(response => response.json())
    //   .then(res => {
    //     this.setState({ dataApi : res })
    //     console.log(res);
    //   })
    this.handleReload()
      

  }
  render () {
    return (
      <div>
        <h3>React - API</h3>
        {this.state.dataApi.map((dat, index)=>{
          return (
            <div key={index}>
              {/* <ul>
                <li > */}
                  <p>{dat.id} : {dat.title} </p>
                  <p>{dat.title}</p>
                  <button value={dat.id} onClick={this.handleRemove}>Hapus Item</button>

                {/* </li>
              </ul> */}
            </div>
          )
        })}
      </div>
    );

  }
}

export default App;
