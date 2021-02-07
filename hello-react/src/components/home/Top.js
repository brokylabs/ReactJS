import React from 'react';

const Top = (top) => {
    let pesalAlert = (top, e) => {
        e.preventDefault()
        alert("Anda sudah berada di Halaman Top")
        alert(top)
    }
    return(
        <a href="/" onClick={(e)=>pesalAlert("Pesan Halaman Top!", e)}>Halaman Top</a>
    )
}


export default Top;