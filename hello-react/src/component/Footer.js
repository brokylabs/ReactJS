import React from 'react';

const Footer = props =>{
    return(
      <div>
        <h2>Halaman Footer {props.name}</h2>
        <p>Niomic. {props.tahun}</p> 
      </div>
    )
  }

  // function Footer(){
  //   return(
  //     <div>
  //       <h3>Halaman Footer Bro!</h3>
  //       <p>2021</p>
  //     </div>
  //   )
  // }


  export default Footer;