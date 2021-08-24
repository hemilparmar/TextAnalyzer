import React, { useState } from 'react'


export default function TextForm(props) {


    const handleUpClick = () => {
        // console.log('Uppercase is clicked' + text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLowerClick = () => {
        // console.log('Lowercase is clicked' + text);
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleClearClick = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }

    const handleReverseClick = () => {
        let newText = text.split('').reverse().join('')
        setText(newText)
        props.showAlert("String Reversed", "success")
    }
    const handleCopy = () => {

        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.showAlert("Copied to Clipboard!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "success")
    }


    const handleOnChange = (event) => {
        // console.log('OnChange');
        setText(event.target.value)
        
    }

    const [text, setText] = useState('')
    // text = "hello" worng way to change text
    // setText('Hemil') //right way to change text
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#101010', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="6"></textarea>

                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleReverseClick}>Reverse Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>



            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>

                <h5><p>{text.split(" ").filter((element)=>{
                        return element.length!==0
                }).length} words and {text.length} characters</p></h5>

                <p>{0.008 * text.split(" ").filter((element)=>{
                        return element.length!==0
                }).length} minutes read</p>

                <h3>Preview</h3>
                <p>{text.length>0?text:"No text to preview"}</p>

            </div>
        </>
    )
}
