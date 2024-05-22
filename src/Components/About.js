import React from 'react'


export default function About(props) {
  
  return (
    <>
    <div class="container">
      <h1>About this Website</h1>
      <p>TextUtils is a ReactJs website built primarily to do various operations on regular typed text. 
        You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting.
        TextUtils  can convert your text to any case in just one simple click of a button. 
        It has an improved property of  reversal of your inputted text,and wear up your earphones to listen to it, instead of straining your eyes.You can even remove extra spaces from your text. It does a detailed analyzing of your text, and provides an output of words, and characters, along with reading time as well. The best part of TextUtils is that it is an open source project, as a result, dozens of new features are in the upcoming, which definitely makes it a cut above the rest. </p>
    </div>
    <div class="accordion" id="accordionExample"  data-bs-theme={props.mo} style={{paddingBottom:'40vw'}}>
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseone" aria-expanded="false" aria-controls="collapseone">
      <strong> How to Use this Website</strong> 
      </button>
    </h2>
    <div id="collapseone" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       You have to enter the text first in the textarea and then u can perform the operation upon your requirement.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Price to Use this Website</strong> 
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        This website is free to use and also more safe to use no credits required
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compatibality</strong> 
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        U can use this website in any website and on any device
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
      <strong>What does Play button do</strong> 
      </button>
    </h2>
    <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       Once u Click on the button Play You can listen the text that entered in the textarea.After the Clicking on the Play button two news button will appear they are Pause and Stop button.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
      <strong>Contact</strong> 
      </button>
    </h2>
    <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       Email:saigannu08@gmail.com
      </div>
    </div>
  </div>
  
</div>
</>
  )
}
