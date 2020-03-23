import React from 'react';
import { Navbar } from 'react-bootstrap';



function MyNavbar (){

  return(
    <Navbar bg="light">
    <Navbar.Brand href="#home">
      <img
        src="/images/octocat.png"
        className="nav-img d-inline-block align-top"
        alt="octocat"
      />
    </Navbar.Brand>
    <h2 className='navbar-title'>GitHub API Fetch</h2>
  </Navbar>
  )
}

export default MyNavbar;