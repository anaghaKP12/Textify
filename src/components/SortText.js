import React,{useState} from 'react'

export default function SortText(props) {
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const handleCopy = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");
  
      }
      const handleClearText = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Cleared the text!","success");
  
      }
      const handleSortAlphabetically = () => {
        const sortedText = text.split('\n').sort().join('\n');
        setText(sortedText);
    };
    const [text, setText] = useState('');

  return (
    <>
     <div className='container' style = {{color: props.mode ==='dark'?'white':'black'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode ==='dark'?'#13466e':'white',color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleSortAlphabetically}>Sort Alphabetically</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
    </div>
    </>
  )
}
