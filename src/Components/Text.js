import React,{useState,useEffect} from 'react'


export default function Text(props) {
 
    const [text,settext]=useState('');
    const [isPaused, setIsPaused] = useState(true);
    const [Resume,setResume]=useState(false);
  const [utterance, setUtterance] = useState(null);


 const onhandle=()=>{// this will convert to uppercase
        console.log('yes');
        let newtex=text.toUpperCase();
        settext(newtex);
        props.salt("Converted into the UpperCase","Success");
    }
    const onhandl=()=>{
      let newtex=text.toLowerCase();
      settext(newtex);
      props.salt("Converted into LowerCase","Success");
    }
    const copytext=()=>{
      navigator.clipboard.writeText(text);
      props.salt("Text Copied","Success");
    }
    const onhand=()=>{// this will reset
        settext('');
        props.salt("Cleared","Success");
    }
    
    const onchan=(event)=>{
        settext('');
       settext(event.target.value);
    }
    useEffect(() => {

      const synth = window.speechSynthesis;
  
      const u = new SpeechSynthesisUtterance(text);
  
  
      setUtterance(u);
  
  
      return () => {
  
        synth.cancel();
  
      };
  
    }, [text]);
    const onhandplay=()=>{
      const synth = window.speechSynthesis;
      if (isPaused) {

        synth.resume();
  
      }
      synth.speak(utterance);
      setResume(false);
      setIsPaused(false);
    }
    const onhandpause=()=>{
      const synth = window.speechSynthesis;
      synth.pause();

      setResume(true);
      setIsPaused(true);
    }
    const onhandstop=()=>{
      const synth = window.speechSynthesis;


      synth.cancel();
  
      setResume(false);
      setIsPaused(true);
    }
  
  const onhand2=()=>{// this will remove extra spaces
    let newt=text.split(/[ ]+/);
    settext(newt.join(" "));
    props.salt("Extra Space Removed","success");
  }
  const onhandsentcase=()=>{
    
   let newtext= text.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    settext(newtext);
    props.salt("Converted to Sentencecase","success");
  }
  const onhandreverse=()=>{
    let newtext=text.split(' ').reverse().join(' ');
    settext(newtext);
    props.salt("Text has been reversed","success");
  }
  const onhandnumbers=()=>{
    let newtext=text.replace(/\D/g, '');
    settext(newtext);
    if(newtext===""){
      props.salt("wouldn't able to extract","warning");
    }else{
    props.salt("numbers has been extracted","success");
    }
  }
  const onhandremovespecial=()=>{
    let newtext=text.replace(/[^a-zA-Z0-9]/g, '');
    settext(newtext);
    
    props.salt("Removed Special Characters","success");
    
  }
  const onhandtextextract=()=>{
    let newtext=text.replace(/[^a-zA-Z ]/g, "");
    settext(newtext);
    
    props.salt("Text Extracted","success");
    
  }
  const onhandreplace=()=>{
    const word = prompt('Enter the string to replace.');
    const newWord = prompt('Enter the string to replace with.');
   const newtext=text.replaceAll( word, newWord );
   settext(newtext);
   if(!text.includes(word)){
    props.salt("text not found","warning");
   }else{
    props.salt("Text replaced","success");
   }
  }
  return (
   
   <div>
    
<h1>{props.heading}</h1>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={onchan} rows="5"></textarea>
</div>

<button type="button" class="btn btn-primary" disabled={text===""?true:false} onClick={onhandle} style={{margin:'0.25rem'}}>Convert to UpperCase</button>
<button type="button" class="btn btn-primary" disabled={text===""?true:false} onClick={onhandl} style={{margin:'0.25rem'}}>Convert to LowerCase</button>
<button type="button" class="btn btn-primary" disabled={text===""?true:false} onClick={copytext} style={{margin:'0.25rem'}}>Copy Text</button>
<button type="button" class="btn btn-primary" disabled={text===""?true:false} onClick={onhandsentcase} style={{margin:'0.25rem'}} >Convert to Sentcase</button>
<button type="button" class="btn btn-primary"  disabled={text===""?true:false}onClick={onhandremovespecial} style={{margin:'0.25rem'}}>Remove Special Characters</button>
<button type="button" class="btn btn-primary" disabled={text===""?true:false} onClick={onhand} style={{margin:'0.25rem'}} >Reset</button>
<button type="button" class="btn btn-primary" disabled={text===""?true:false}onClick={onhand2} style={{margin:'0.25rem'}}>Remove Extra Spaces</button>
<button type="button" class="btn btn-primary" disabled={text===""?true:false} onClick={onhandreplace} style={{margin:'0.25rem'}} >Replace Text</button>
<button type="button" class="btn btn-primary" disabled={text===""?true:false} onClick={onhandreverse} style={{margin:'0.25rem'}} >Reverse Text</button>
<button type="button" class="btn btn-primary" disabled={text===""?true:false} onClick={onhandnumbers} style={{margin:'0.25rem'}}>Extract Numbers</button>
<button type="button" class="btn btn-primary" disabled={text===""?true:false} onClick={onhandtextextract} style={{margin:'0.25rem'}} >Extract Text</button>
{isPaused===false?"":(<button type="button" disabled={text===""?true:false} class="btn btn-primary" onClick={onhandplay} style={{margin:'0.25rem'}}>{Resume===true?"Resume":"Play"}</button>)}
{isPaused===false?(<button type="button" disabled={text===""?true:false} class="btn btn-primary" onClick={onhandpause} style={{margin:'0.25rem'}}>{Resume===false?"Pause":"Resume"}</button>):""}
{isPaused===false || Resume===true?(<button type="button" disabled={text===""?true:false} class="btn btn-primary" onClick={onhandstop} style={{margin:'0.25rem'}}>Stop</button>):""}
<div class="container">
    <h1>Your text Summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
    <p>{0.004*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
</div>
<div class="container" style={{paddingBottom:'20vw'}}>
    <h1>Preview</h1>
    <p>{text}</p>
</div>

</div>
  )
}
