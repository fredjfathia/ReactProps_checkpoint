import React from 'react';
import './App.css';
import Profile from'./profile/Profile.js';
import Picture from './profile/Picture.js';
import ActionComponet from'./profile/ActionComponet.js';
import image  from './profile/image3.PNG' ;

function App() {
  const handleClick=(name,e)=> {
    e.preventDefault();
    alert(name);
  }
  const fullname="Fredj Fathia" ;
  return (
    <div className="App" style={{border:'4px dotted black', width:'50%',marginLeft:'8cm',marginTop:'1cm', padding:'20px'}}>
     <Profile/>
     <Picture>
       <img src={image} alt="" ></img>
     </Picture>
    <ActionComponet myfunction={handleClick} name={fullname}/>
    </div>
  );
}

export default App;
