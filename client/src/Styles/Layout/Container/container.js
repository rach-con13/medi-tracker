import styled from "styled-components";
import {spacing,layout,sizing} from "../../Util/util";

export const Container = styled.div`
    margin:0 auto;
    ${props => sizing(props)}; // width
    ${props => layout(props)}; // background, color,border
    ${props => spacing(props)}; // margin ,padding
    
`;

export const gridState = (props) => {
    if(props.container) {
        return {
            display:"grid",
            ["grid-gap"]:props.gap,
            ["grid-template-rows"]:props.rows,
            ["grid-template-columns"]:`repeat(12,1fr)`,

        }
    } 
    if(props.item) {
        return {
            ["grid-column-start"]:`span ${props.span}`
        }
    }
}

export const Grid = styled(Container)`
    ${props => gridState(props)};

`
