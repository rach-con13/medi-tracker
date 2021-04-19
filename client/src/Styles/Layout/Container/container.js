import styled from "styled-components";
import {spacing,layout,sizing} from "../../Util/util";

export const Container = styled.div`
    margin:0 auto;
    ${props => sizing(props)}; // width
    ${props => layout(props)}; // background, color,border
    ${props => spacing(props)}; // margin ,padding
    
`;
