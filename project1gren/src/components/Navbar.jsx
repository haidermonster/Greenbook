import React from 'react'
import {Link}from 'react-router-dom'

function Navbar() {
  return (
    <>
    
    <nav class="navbar navbar-expand-lg " style={{ backgroundColor: '#a0fc9d' }}>
  <div class="container-fluid">
    <a class="navbar-brand mx-lg-5" href="#"><img className='img-fluid' src="_logo.png" style={{ width:'230px' }} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">  
          <Link class="nav-link active" style={{color:'rgb(0,166,81)'}} aria-current="page" to="/">Home</Link>
        </li>
     
        <li class="nav-item">
          <Link class="nav-link active" style={{color:'rgb(0,166,81)'}} aria-current="page" to="/About">About</Link>
        </li>

       
        
        <li class="nav-item">
          <Link class="nav-link active" style={{color:'rgb(0,166,81)'}} aria-current="page" to="/Contact">Contact</Link>
        </li>
        
      
     
      </ul>
<div>
<Link  to="/Signup">
<button className='btn' style={{backgroundColor:'rgb(0,166,81)',color:'white'}}>Signup</button>
</Link> 
<Link  to="/Login">
<button className="btn" style={{backgroundColor:'rgb(0,166,81)',color:'white'}}>Login</button>
</Link> 
 
</div>
 
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar