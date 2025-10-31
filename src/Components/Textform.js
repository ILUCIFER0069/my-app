import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText] = useState("");
    function upper(){
        setText(text.toUpperCase());
        props.showAlert('success','Converted to UpperCase')
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const lower =()=>{
        setText(text.toLowerCase())
        props.showAlert('success','Converted to LowerCase')
    }
    const clear = ()=>{
        setText('')
        props.showAlert('success','Cleared Text')
    }
    const [mode,setmode] = useState('Dark')
    const togglemode = ()=>{
        if(mode==='Light'){
            document.body.style.color = 'black';
            document.body.style.backgroundColor = 'white';
            setmode("Dark")
            document.getElementById('my-box').style.backgroundColor = 'white';
            document.getElementById('my-box').style.color = 'black'
            props.showAlert('success','Theme set to Light mode')
            document.title = 'TextUtils - Light Mode'
        }
        else{
            document.body.style.color = 'white';
            document.body.style.backgroundColor = '#212529';
            setmode("Light");
            document.getElementById('my-box').style.backgroundColor = '#2A2A2A';
            document.getElementById('my-box').style.color = 'white'
            props.showAlert('success','Theme set to Dark mode')
            document.title = 'TextUtils - Dark Mode'
        }
    }
    const copy = () =>{
        const text = document.getElementById('my-box');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const red =()=>{
        if(mode=='Light'){
            document.body.style.backgroundColor = '#8E0808'
        }
        else{
            document.body.style.backgroundColor = '#FF777A'
        }
    }
    const yellow =()=>{
        if(mode=='Light'){
            document.body.style.backgroundColor = '#BC922A'
        }
        else{
            document.body.style.backgroundColor = '#FBE582'
        }
    }
    const green =()=>{
        if(mode=='Light'){
            document.body.style.backgroundColor = '#0D3D01'
        }
        else{
            document.body.style.backgroundColor = '#93EF93'
        }
    }
  return (
    <>
    <h1 >Enter the text to Analyze below</h1>
    <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" checked={mode === "Light"} onChange={togglemode} />
        <label className="form-check-label" htmlFor="switchCheckDefault">Enable {mode} mode</label>
    </div>
    <h6>Change Theme: </h6>
    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" className="btn btn-danger" onClick={red}>Red</button>
        <button type="button" className="btn btn-warning" onClick={yellow}>Yellow</button>
        <button type="button" className="btn btn-success"onClick={green}>Green</button>
    </div>
    <div className="mb-3">
        <textarea className="form-control"  id="my-box" rows="8" value={text} onChange={handleOnChange}></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={upper}>UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={lower}>LowerCase</button>
    <button className="btn btn-success mx-1" onClick={copy}>Copy</button>
    <button className="btn btn-danger mx-1" onClick={clear}>Clear</button>
    <div className="container my3">
        <h1>Your Text Summary</h1>
        <p>{text.trim().length > 0 ? text.trim().split(/\s+/).length : 0} words and {text.replace(/\s+/g, ' ').trim().length} letters </p>
        <p>{0.2*(text.trim().length > 0 ? text.trim().split(/\s+/).length : 0)} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter something above to preview'}</p>
    </div>
    </>
  )
}
