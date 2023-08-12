import React, { useState } from "react";

export default function TextForm(props) {
  // for upperCase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  };
  // For lower case
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success")
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  // for clear  text
  const handleClearText = () => {
    setText("");
    props.showAlert("Text are removed","success")
  };
  // for copy text inside the textarea
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Your text are copied","success")
  };

  // for handle extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    console.log("function called", newText);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed form text","success")
  };

  const countSentences = () => {
    const textLength = text.split(".").length;
    var noOfsentence = text.endsWith(".") ? textLength - 1 : textLength;
    return noOfsentence;
  };

  const [text, setText] = useState(" ");

  return (
    <>
      <div className="container" style={{color : props.mode ==='dark'?'white':'#021a3d'}}>
        <h1>{props.heading}-</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor : props.mode ==='dark'?'grey':'white',color : props.mode==='dark'?'white':'#021a3d'}}
          ></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to upperCase{" "}
        </button>
        <button className="btn btn-primary ms-3 " onClick={handleLoClick}>
          Convert to lowerCase{" "}
        </button>
        <button className="btn btn-primary ms-3 " onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary ms-3 " onClick={handleCopyText}>
          Copy Text
        </button>
        <button className="btn btn-primary ms-3 " onClick={handleExtraSpaces}>
          Remove extra spaces from text
        </button>
      </div>
      <div className="container my-3" style={{color : props.mode ==='dark'?'white':'#021a3d'}}>
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} word in a paragraph with {text.length}{" "}
          characters
        </p>
        <p>{(0.008 * text.split(" ").length).toFixed(2)} minutes to read</p>
        <p>{countSentences()} sentences</p>
        <h4>Preview</h4>
        <p>{text.length>1 ? text : 'Enter something in the textbox above to preview it here '}</p>
      </div>
    </>
  );
}
