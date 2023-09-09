import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
       // console.log("uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        // console.log("uppercase was clicked"+ text);
         let newText=text.toLowerCase();
         setText(newText);
     }
     const handleClearClick=()=>{
        // console.log("uppercase was clicked"+ text);
         let newText="";
         setText(newText);
     }
    const handleOnChange=(event)=>{
       // console.log("on change");
        setText(event.target.value);
    }
    const handleCopy=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [text,setText]=useState('');
  return (
    <>
 <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>  
    <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange}
   style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
<h2>Your text summary</h2>
<p>{text.split(" ").length} words and {text.length} characters </p>
<p>{0.008*text.split(" ").length} minutes to read</p>
<h2>preview</h2>
<p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}

