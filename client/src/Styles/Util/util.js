import styled from "styled-components";


export const sizing = (props) => {
    let result;
    console.log(props.size);
    switch(props.size) {
        case "sm": 
            result = {width:'40%'}
            break;
        case "md":
           result =  {width:'60%'}
           break;
        case "lg":
            result = {width:"80%"}
            break;
        case "max":
            result = {width:"100%"}
            break;
        default:
            result = {width:"inherit"}

    }
   
    return result;
}

export const layout = (props) => {
    return {
        background:props.bg,
        color:props.color,
        border:props.border,
       
    }
}



export const spacing = (props) => {
    return {
        padding:`${5*(props.pdVert || 0)}px ${5*(props.pdHorizon || 0)}px `,
        ["margin-top"]:`${5*props.mg_top}px`,
    }
}

