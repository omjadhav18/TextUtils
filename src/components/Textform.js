import React from "react";
import {useState} from 'react'
export default function Textform(props) {
  const [text,setText] = useState("Enter the text here!")
  const [textcopy,setTextCopy] = useState("Copy")

  const onChangeHandler = (event) =>{
    setText(event.target.value)
  }

  const onUpperClick = () =>{
    let newText=text.toUpperCase();
    setText(newText)
    props.function("Converted to Uppercase",'success')
    
  }
  const onLowerClick = () =>{
    setText(text.toLowerCase())
    props.function("Converted to Lowercase",'success')
  }
  const onClearClick = () =>{
    setText('')
    props.function("Cleared Text",'success')
  }
  const onCopyClick = ()=>{
    let newText=text;
    try {
        navigator.clipboard.writeText(newText);
        setTextCopy("Copied")
        props.function("Copied to Clipboard",'success')

    } catch (error) {
        console.log(error)
        
    }
    
  }
  const onSpaceClick= () =>{
    let newText=text.split(/[  ]+/);
    setText(newText.join(' '))
    props.function("Removed Extra Spaces",'success')
    
  }
  return (
    <>
    <div className="container" >
        <h1 className={`my-5 text-${props.mode==='light'?'black':'white'}`}>This is text utilis</h1>
      <div className="mb-3 my-5">
        <textarea
          className={`form-control bg-${props.mode==='light'?'white':'#878e95'} text-${props.mode==='light'?'black':'black'}`}
          id="exampleFormControlTextarea1"
          value={text} onChange={onChangeHandler}
          rows="8"
        ></textarea>
        <div className="my-5">
        <button className="btn btn-primary mx-2" onClick={onUpperClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={onLowerClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={onClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={onCopyClick}>{textcopy}</button>
        <button className="btn btn-primary mx-2" onClick={onSpaceClick}>Remove Extra Spaces</button>
        </div>
      </div>
      <h1 className={`my-5 text-${props.mode==='light'?'black':'white'}`}>Summary</h1>
      <p className={`my-5 text-${props.mode==='light'?'black':'white'}`}>{text.split(' ').length} - words    {text.length} - characters </p>
      </div>
    </>
  );
}