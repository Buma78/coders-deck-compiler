import React from 'react'
import { BiExport } from 'react-icons/bi';
import styled from 'styled-components';

const Console = styled.div`
      background : white;
      display : flex;
      flex-direction: column; 
`;
const Header = styled.div`
   height: 3rem;
   background : #ededed;
   box-shadow : 0px 4px 4px rgba(0,0,0,0.16);
   z-index: 2;
   display : flex;
   align-items: center;
   justify-content: space-between;
   font-size: 1.25rem;
   font-weight:700;
   padding : 1rem;

   span{
       display : flex;
       align-items : center;
      font-weight:400;

    svg{
        font-size: 1.5rem;
    }
`
const OutputArea = styled.div`
    background : #ededed;
    flex-grow : 1;
`;
const OutputConsole = () => {
  return (
    <Console>
    <Header>Output Console :{" "}
        <span>
            <BiExport/>
            Export Output
        </span>
    </Header>
    <OutputArea></OutputArea>
</Console>
  )
}

export default OutputConsole;