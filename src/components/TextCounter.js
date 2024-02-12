import React,{useState} from 'react'

export default function TextCounter(props) {
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');

  return (
    <div className='container' style = {{color: props.mode ==='dark'?'white':'black'}}>
    <h1 className='mb-4'>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode ==='dark'?'#13466e':'white',color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <div className="container my-3"style = {{color: props.mode ==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </div>
  )
}
