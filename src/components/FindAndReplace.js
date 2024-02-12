import React,{useState} from 'react'
export default function FindAndReplace(props) {
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const handleFindAndReplace = () => {
        if (find === '') {
            alert('Please enter text to find.');
            return;
        }
        const regex = new RegExp(find, 'g');
        const newText = text.replace(regex, replace);
        setText(newText);
    };
    const handleReplaceChange = (event) => {
        setReplace(event.target.value);
    };
    const handleFindChange = (event) => {
        setFind(event.target.value);
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
    const [text, setText] = useState('');
    const [find, setFind] = useState('');
    const [replace, setReplace] = useState('');
  return (
    <>
     <div className='container' style = {{color: props.mode ==='dark'?'white':'black'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode ==='dark'?'#13466e':'white',color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <div className="mb-3">
                <input type="text" className="form-control" placeholder="Find" value={find} onChange={handleFindChange}style={{ width: '200px' }}  />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Replace" value={replace} onChange={handleReplaceChange} style={{ width: '200px' }} />
            </div>
            <button className="btn btn-primary" onClick={handleFindAndReplace}>Find and Replace</button>
    </div>
    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear text</button>
    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
    </>
  )
}
