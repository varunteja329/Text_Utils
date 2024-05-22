import './App.css';
import Footer from './Components/Footer.js'
import Navbar from './Components/Navbar.js'
import Text from'./Components/Text.js'
import React, {useState,useEffect} from 'react'
import Alert from './Components/Alert.js'
import About from './Components/About.js'
import {Routes,Route} from "react-router-dom";

function App() {
  const [m,setm]=useState('light');
  const [m1,setm1]=useState('light');
  const toogleMode=()=>{ // To convert light ot dark and dark to light mode
    //document.body.classList.add('bg-'+cls);
    bgremove();
    if(m1==='light'){
      setm('dark');
      setm1('dark');
      showalt("Dark Mode Enabled","Success");
    }else{
      setm('light');
      setm1('light');
      showalt("Light Mode Enabled","Success");
    }

  }
  useEffect(() => {// convertions light and dark mode
    document.body.style.backgroundColor =m==='dark'?'#022343':'white'
    document.body.style.color=m==='dark'?'white':'black'
});
const [alt,setalt]=useState(null);
const showalt=(message,type)=>{// pop up messages
       setalt({
        msg:message,
        type:type
       })
       setTimeout(()=>{
             setalt(null);
       },2500);
}
const bgremove=()=>{// color palette removal
  document.body.classList.remove('bg-primary');
document.body.classList.remove('bg-light');
 document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-warning');
  setm('light');
  
}
const tg=(cls)=>{// color palette adder
  bgremove();
    document.body.classList.add('bg-'+cls);
    if(cls==='light'){
      setm('light');
    }else{
    setm('dark');
    }
    //setm('dark');
}
  
  return (
   <>

   <div>
   
   <Navbar title="TextUtilis" mode={m} toogleMode={toogleMode} tg={tg}/>
   
   {/*here we used the variable above title */}
   <Alert alert={alt}/>
   
   <div class="container"> 
   
   <Routes>
      <Route path="/about" element={<About mo={m}/>}></Route>
          
        
          <Route path="/"element={ <Text heading='Enter Your Text here' salt={showalt}/>}></Route>
         
         
          </Routes>
          
        </div>
     
  
     {/*In bootstrap there is class for div container it moves elements to center */}
   
     
   </div>
   <Footer/>
   </>
  );
}

export default App;
