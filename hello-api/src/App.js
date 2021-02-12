import React, { Component } from 'react';
import axios from "axios"
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataApi : [],
      editData : false,
      dataPost : {
        id: 0,
        title: "",
        body : ""
      }
    }
    // this.handleRemove = this.handleRemove.bind(this)
  }

  handleReload = () => {
    axios.get("http://localhost:3005/posts").then(res => {
        this.setState({ dataApi : res.data })
        // console.log(res.data);
      })
  }

  clearInput = () => {
    let newdataPost = {...this.state.dataPost}
    newdataPost["id"] = ""
    newdataPost["title"] = ""
    newdataPost["body"] = ""

    this.setState({
      dataPost : newdataPost
    })
  }

  handleRemove = (e) => {
    console.log(e.target.value);
    fetch(`http://localhost:3005/posts/${e.target.value}`, {
      method : "DELETE" 
    }).then(res => this.handleReload())
  }

  handleChange = (e) => {
    let newdataPost  = {...this.state.dataPost}
    if(this.editData === false){
      newdataPost['id'] = new Date().getTime()
    }

    newdataPost[e.target.name] = e.target.value
    this.setState({
      dataPost : newdataPost
    }, () => console.log(this.state.dataPost))
  }

  getData = (e) => {
    axios.get(`http://localhost:3005/posts/${e.target.value}`)
      .then(res => {
        this.setState({
          dataPost : res.data,
          editData : true
        })
      })
  }

  postData = () => {
    // axios.post(`http://localhost:3005/posts`, this.state.dataPost)
    //   .then(res  => { this.handleReload()})
    // console.log("add data");

    if(this.state.editData === false){
      axios({
        method : "POST",
        url : "http://localhost:3005/posts",
        data : this.state.dataPost
      }).then(res  => { 
        this.handleReload();

        let newdataPost = {...this.state.dataPost}
        newdataPost["id"] = ""
        newdataPost["title"] = ""
        newdataPost["body"] = ""
        this.setState({
          dataPost : newdataPost
          // dataPost : this.clearInput()
        })
      })} else {
        axios.put(`http://localhost:3005/posts/${this.state.dataPost.id}`, this.state.dataPost)
          .then(res => {
            this.handleReload()
            this.clearInput()
          }).then(() => {
            this.setState({
              editData : false
            })
          })
      }     
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
          <input type="text" name="title" value={this.state.dataPost.title} placeholder="Masukan Title" onChange={this.handleChange}></input>
          <input type="text" name="body" value={this.state.dataPost.body} placeholder="Masukan Body" onChange={this.handleChange}></input>
          <button type="submit" onClick={this.postData}>Save Data</button>
          
        {this.state.dataApi.map((dat, index)=>{
          return (
            <div key={index}>
                  {/* <p>{dat.id} : {dat.title} </p> */}
                  <p>{dat.title}</p>
                  <p>{dat.body}</p>
                  <button value={dat.id} onClick={this.handleRemove}>Hapus Item</button>
                  <button value={dat.id} onClick={this.getData}>Edit Data</button>
            </div>
          )
        })}
      </div>
    );

  }
}

export default App;
