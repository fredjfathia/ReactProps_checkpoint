import React from 'react'; 
function ActionLink(props) {
   return (
      <a href="#" onClick={(e)=>props.myfunction(props.name,e)}>
        Clique ici
      </a>
    );
  }
 export default ActionLink