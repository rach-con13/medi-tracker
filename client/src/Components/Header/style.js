import {sizing} from '../../Styles/Util/util';
import styled from 'styled-components';
import { Button } from '../../Styles/Elements/Button/Button';

export const HeaderSection = styled.header`

    ${props => sizing(props)};
    background:none;
    margin-top:25px;
`;

export const HeaderNav = styled.div`
    display:flex;
    align-items:baseline;
`;
export const HeaderNavItem = styled(Button)`
   
    &:not(:first-child) {
        margin-left:10px;
    }
`