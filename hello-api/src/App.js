import React, { Component } from 'react';
import axios from "axios"
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataApi : []
    }
  }

  componentDidMount(){
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then(response => response.json())
    //   .then(res => {
    //     this.setState({ dataApi : res })
    //     console.log(res);
    //   })

      axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
        this.setState({ dataApi : res.data })
        // console.log(res.data);
      })

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
