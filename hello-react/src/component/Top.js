import React from 'react';

const Top = (top) => {
    let pesalAlert = (top) => {
        alert("Anda sudah berada di Halaman Top")
        alert(top)
    }
    return(
        <a href="/" onClick={()=>pesalAlert("Pesan Halaman Top!")}>Halaman Top</a>
    )
}


export default Top;