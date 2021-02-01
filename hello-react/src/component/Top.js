import React from 'react';

const Top = () => {
    let pesalAlert = () => {
        alert("Anda sudah berada di Halaman Top")
    }
    return(
        <a href="/" onClick={pesalAlert}>Halaman Top</a>
    )
}


export default Top;