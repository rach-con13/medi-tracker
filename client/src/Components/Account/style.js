import styled from "styled-components";

export const AccountHeader = styled.header`
    display:flex;
`;

export const AccountIcon = styled.div`
    margin-right:10px;
    height:30px;
    border-radius:100px;
    width:30px;
    background:dodgerblue;
`;

export const AccountProfile = styled.div`
    display:flex;
    align-items:center;
`;

export const MedicineCard = styled.div`
    background:#FEFCF5;
    margin-top:15px;
    box-shadow:1px 1px 3px 1px #cfc9b4;
`;
export const CardItem = styled.div`
    padding:24px;
    color:#898366;
    display:flex;
    &:not(:first-child) {
        border-top:1px solid #ECE5CE;
    }

`;