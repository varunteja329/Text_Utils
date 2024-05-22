import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'70px'}}>{/*  this div for pop up message*/}
   { props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
     <strong>{props.alert.type}:{props.alert.msg}</strong>
 
</div>}
</div>
  )
}
