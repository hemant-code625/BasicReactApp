import React,{useState} from "react";


export default function TextFrom(props) {
  const handleLoClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleUpClick =()=>{
    console.log("UpperCase is clicked" + text); // this will give us text data in the console
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnCopy =()=>{
    var text = document.getElementById('exampleFormControlTextarea1');
    navigator.clipboard.writeText(text.value);

  }
  const handleOnClear=()=>{
    var afterClear = "";
    setText(afterClear);  
  }

  // const UpCase =()=>{
  //   let newText = text.UpCase;
  //   setText = newText;   
  // }
  const handleOnChange =(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  /* imported usedState hook from react where the value of text is inside the parenthesis*/

  const [text,setText] = useState("")
  /* we cannot change the above text and setText directly */
  
  return (
    <div>
    <div className="mb-3">
    <h2>{props.heading}</h2>

    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows="10"
      value ={text}
      onChange={handleOnChange}
    ></textarea>

    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>LowerCase</button>
    <button className="btn btn-primary mx-1" onClick={handleOnCopy}>Copy</button>
    <button className="btn btn-danger mx-1" onClick={handleOnClear}>Clear Text</button>
    
    <div className="container my-3">
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").length-1} words and {text.length - text.split(" ").length + 1} characters</p>
      
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h3> Preview </h3>

    </div>
    </div>
  );
}
