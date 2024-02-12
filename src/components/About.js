import React from 'react'

export default function About(props) {
    // const[myStyle,setMyStyle] = useState({
    //         color: 'black',
    //         backgroundColor: 'white'
    //      });
    let myStyle = {
      color: props.mode === 'dark'?'white':'#042743',
      backgroundColor: props.mode === 'dark'?'rgb(36,74,104)':'white',
    }
    
return (
    <div className = "container"style = {{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1 className = "my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>User Friendly</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style = {myStyle}>
        <strong>This application Provides a clean and intuitive user interface for easy interaction.</strong> With its user-friendly interface and straightforward operation, this text refinement tool offers an intuitive experience for users. The layout is clear and easy to navigate, and the functionalities are presented in a logical manner. Users can quickly grasp how to use the app's features without the need for extensive learning or training, resulting in a smooth and enjoyable text editing experience.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Versatile</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style = {myStyle}>
        <strong>This application Offers a versatile set of text manipulation features suitable for various use cases.</strong> Your text refinement tool offers a wide range of functionalities, allowing users to perform various text manipulation tasks such as removing extra spaces, removing duplicate lines, finding and replacing text,counting words,characters,sorting alphabetically, and more. Its versatility makes it suitable for diverse text editing needs, accommodating different use cases and preferences.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Efficient</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style = {myStyle}>
        <strong>This application Streamlines text editing tasks, saving users time and effort.</strong>  The efficiency of the application lies in its ability to streamline text editing tasks. By providing quick and easy-to-use features for refining and editing text content, users can accomplish their tasks with minimal effort and time. The app's efficient design and functionality enhance user productivity, making text manipulation tasks more manageable and less time-consuming.
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
