import React, { Component } from 'react';

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            title : "Menu Makanan",
            minuman : "Menu Minuman",
            minang : "",
            kota : "",
            menuMakanan : [
                {
                    nama : "Sate padang",
                    harga : 15000
                },
                {
                    nama : "Sate Klatak",
                    harga : 50000
                },
                {
                    nama : "Sate Ayam",
                    harga : 15000
                },
                {
                    nama : "Sate Ayam Madura",
                    harga : 20000
                }
            ]
        }
        this.ubahData = this.ubahData.bind(this);
        this.handleChange = this.handleChange.bind(this)
    };

    // ubahData(){
    //     this.setState({title : "Pilih Makanan"})
    // }

    ubahData(){
        this.setState((state, props)=>{
            return{
                title : state.minuman,
                minuman : state.title
            }
        })
    }

    handleChange(inputValue, e){
        // console.log(e.target.value);

        // Penulisan untuk state tunggal, lebih simple
        this.setState({ [inputValue] : e.target.value}) 

        // Penulisan untuk multiple state
        // let minangValue = e.target.value;
        // this.setState((state, props)=>{
        //     return({
        //         minang : minangValue
        //     })
        // })
    }
    render() {
        return(
            <div>
                <h3>{this.state.title}</h3>
                <h2>{this.state.minuman}</h2>
                <button onClick={this.ubahData}>Ubah</button><br></br>
                <br></br>
                <input type="text" value={this.state.minang} onChange={(e)=>this.handleChange("minang", e)}></input>
                <input type="text" value={this.state.kota} onChange={(e)=>this.handleChange("kota", e)}></input>

                {this.state.menuMakanan.map((value, index)=>{
                    return(
                        <div key={index}>
                        <p>No : {index +1}</p>
                        <p>Makanan : {value.nama}</p>
                        <p>Harga : {value.harga}</p>
                    </div>
                    )
                    
                })}
            </div>
        )
    }
}

export default Main;