import styled from "styled-components";
import {spacing} from '../../Util/util';



function TypographyBase(props) {
    return {
       color:props.color,
       ["font-size"]:props.fontSize,
       ["font-weight"]:props.fontWeight,
       ["text-align"]:props.align,
       ...spacing(props)
    }
}
export const Typography = styled.p`
    ${props => TypographyBase(props)};
`;

export const Title = styled(Typography).attrs({
    as:'h1'
})`
    font-size:24px;
    font-weight:bold;
    color:"#898366";
`;
export const Subtitle = styled(Typography).attrs({
    as:'h4'
})`
    font-size:18px;
    font-weight:bold;
    color:"#898366";
`;
export const Paragraph = styled(Typography)`
    line-height:1.5em;
    font-size:16px;
    color:"#FEFCF5";
`;
export const Accent = styled(Typography)`
    font-weight:bold;
    color:#55C992;
`