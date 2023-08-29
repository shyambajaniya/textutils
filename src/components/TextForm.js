import React, {useState} from 'react'
import propTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState ("");
    const handleUpClick = () => {
        // console.log("uppercase was clicked");
        const newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
        
    }
    const handleDownClick = () => {
        // console.log("uppercase was clicked");
        const newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
        // setText("i love my mommy ans Shyam")
    }
    const handleCopy = () => {
       let tet = document.getElementById('myBox')
       tet.select() 
       navigator.clipboard.writeText(tet.value)
       props.showAlert("Text copied", "success")
    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }

  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea></div>
            <button className="btn btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn btn btn-primary mx-2" onClick={handleCopy}>Copy Text  </button>
          
      </div>
    <div className="container my-3"  style={{color : props.mode==='dark'?'white':'black'}} >
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
  
  </>
)}
