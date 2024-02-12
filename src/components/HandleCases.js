import React,{useState} from 'react'

export default function HandleCases(props) {
    const handleUpClick = ()=>{
        // console.log("Upper case was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Conerted to lower case!","success");
      }
      const handleClearText = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Cleared the text!","success");
  
      }
      const handleCopy = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");
  
      }
      const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const handleInvert = () => {
        let newText = text.split('').map((char) => {
            return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
        }).join('');
        setText(newText);
        props.showAlert("Inverted text case!", "success");
    };
    const handleCapitalize = () => {
        let newText = text.toLowerCase().split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
        setText(newText);
        props.showAlert("Capitalized text!", "success");
    };
    const [text, setText] = useState('');
  return (
    <>
      <div className='container' style = {{color: props.mode ==='dark'?'white':'black'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode ==='dark'?'#13466e':'white',color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to upper case</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lower case</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleInvert}>Invert</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalize}>Capitalize</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
        </div>
    </>
  )
}
