import { styled } from "@mui/material";

export const CabesalhoContainer = styled('header')`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #F0F0F0;
    padding: ${({theme}) => theme.spacing(6)};
`;

export const Logo = styled('img')`
    width: 230px;
`;