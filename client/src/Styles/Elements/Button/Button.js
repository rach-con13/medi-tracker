
import styled from "styled-components";
import {spacing} from "../../Util/util";

function ButtonStates(props) {
    let result;
   switch(props.state) {
       case "primary":
           result = {
               background:'none',
               color:'#605D52',         
           }
           break;
        
       case "secondary":
           result = {
               background:"#DBD8C9",
             
               color:"#585443",
               ["border-radius"]:"4px"
           }
           break;
           
       case "selected":
           result = {
              background:'#55D99A',
              
              padding:'8px',
              ["border-radius"]:"4px"
           }
           break;
        default:
            result = {
                background:'none',
                color:'#605D52',         
            }  
      
   }
   let buttonSpacing = spacing(props); // buttons are spaced by factor of 5
   console.log(result);
   return {...result};
}


export let Button = styled.button`
    border-style:none;
    font-size:16px;
    font-weight:bold;
    ${props => ButtonStates(props)}

`;