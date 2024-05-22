import React  from 'react'
import PropTypes from 'prop-types'
import {Link}  from 'react-router-dom'


export default function Navbar(props) {
  
    

  return (
   
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
  <div class="container-fluid">
    <Link class="navbar-brand" to="/" >{props.title}</Link>
{/*here props.title is a variable we use it . we assign it in the App.js similarly we can use many variable */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
     
      </ul>
    </div>
    <div class="d-flex">
      <div class="bg-dark mx-2" onClick={()=>{props.tg('$blue-900')}} style={{height:'30px',width:'30px',cursor:'pointer',borderRadius:'100%',borderStyle:'solid',borderWidth:'2px'}} ></div>
      <div class="bg-success  mx-2" onClick={()=>{props.tg('success')}} style={{height:'30px',width:'30px',cursor:'pointer',borderRadius:'100%',borderStyle:'solid',borderWidth:'2px'}}></div>
      <div class="bg-danger  mx-2" onClick={()=>{props.tg('danger')}} style={{height:'30px',width:'30px',cursor:'pointer',borderRadius:'100%',borderStyle:'solid',borderWidth:'2px'}}></div>
      <div class="bg-warning  mx-2" onClick={()=>{props.tg('warning')}} style={{height:'30px',width:'30px',cursor:'pointer',borderRadius:'100%',borderStyle:'solid',borderWidth:'2px'}}></div>
      <div class="bg-light  mx-2" onClick={()=>{props.tg('light')}} style={{height:'30px',width:'30px',cursor:'pointer',borderRadius:'100%',borderStyle:'solid',borderWidth:'2px'}}></div>
    
    </div>
   

   

   

  </div>
  
</nav>


  )
}
Navbar.propTypes={title:PropTypes.string.isRequired}

Navbar.defaultProps={title:'TextUtilis'}


