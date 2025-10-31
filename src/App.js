
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Textform from './Components/Textform'
import { Alert } from './Components/Alert';


function App() {
  const[aler,setAlert] = useState(null);
  const showAlert = (type,msg)=>{
    setAlert({'type':type,'msg':msg})
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
    <Navbar name='TEXT UTILITY'/>
    <Alert alert={aler}/>
    <div className="container">
      <Textform showAlert ={showAlert} />
    </div>
    
    </>
  );
}

export default App;
