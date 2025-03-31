import React from 'react';
import '../App.css';

export default function Navbar(){
  return (
    <div style={{margin: "auto", display: "flex", justifyContent: "center"}}>
      <nav style={{border: "2px solid white"}}>
      <a href="/" className='nav' style={{color: "yellow"}}>Home</a>
      <a href="/blogs" className='nav' style={{color: "yellow"}}>Blogs</a>
      </nav>
      <br /><br />
    </div> 
  );
}