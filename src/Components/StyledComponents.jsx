import styled, {css} from 'styled-components'

export const Boton = styled.button`

background-color: ${({ theme }) => theme.backgroundColor};
    color: white;
    border: 1px;
    border-radius: 10px;
    /* margin: 0px; */
    margin-right: 4px;
    margin-top: 4px;
   

`;

export const Anchor = styled.div`
width: 94%;
background-color: ${({ theme }) => theme.backgroundColor};
display: flex;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  
`;


