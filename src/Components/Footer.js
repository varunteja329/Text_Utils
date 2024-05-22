import React from 'react'
import linkedin from './linkedin.png'
export default function Footer() {
  return (
    <div class="d-flex align-items-center justify-content-between" style={{position:'fixed',bottom:'0vw',width:'100vw',height:'7vw',backgroundColor:'black',color:'white',zIndex:99999}} >
        <div class="container text-center">
            
   Developed by Gannu Abhijith Sai 
     <a href="https://www.linkedin.com/in/gannu-abhijithsai-38342923b/"><img src={linkedin} alt="linkedin" style={{height:'3vw',width:'3vw',marginLeft:'1.5vw',marginTop:'-0.4vw'}}></img></a>
    
     </div>
        </div>
  )
}
