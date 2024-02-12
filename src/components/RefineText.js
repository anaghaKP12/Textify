import React,{useState} from 'react'

export default function RefineText(props) {
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!","success");
  
      }
      const handleRemoveDuplicateLines = () => {
        let newText = text.split('\n').filter((line, index, self) => {
            // Return true if the current line is the first occurrence in the array
            return self.indexOf(line) === index;
        }).join('\n');
        setText(newText);
        props.showAlert("Removed duplicate lines!", "success");
    };
    const handleRemoveLineBreaks = () => {
        let newText = text.replace(/(\r\n|\n|\r)/gm, "");
        setText(newText);
        props.showAlert("Removed line breaks!", "success");
    };
    const handleRemoveLineContainingString = () => {
        const searchString = window.prompt("Enter the string to remove lines containing:");
        if (searchString !== null) {
            let newText = text.split('\n').filter(line => !line.includes(searchString)).join('\n');
            setText(newText);
            props.showAlert(`Removed lines containing '${searchString}'!`, "success");
        }
    };
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
    const handleReverseString = () => {
      const reversedText = text.split('').reverse().join('');
      setText(reversedText);
  };
    const [text, setText] = useState('');
  return (
        <>
      <div className='container' style = {{color: props.mode ==='dark'?'white':'black'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode ==='dark'?'#13466e':'white',color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveDuplicateLines}>Remove duplicate lines</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveLineBreaks}>Remove line breaks</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveLineContainingString}>Remove line containing</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleReverseString}>Reverse</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
        </div>
    </>
  )
}
