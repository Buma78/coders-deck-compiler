import React from 'react';
import styled from 'styled-components';
//import {BiImport} from "react-icons/bi";
const Console = styled.div`
      display : flex;
      flex-direction: column; 
      position : relative ;
`;
const Header = styled.div`
   height: 4rem;
   background : #ededed;
   box-shadow : 0px 4px 4px rgba(0,0,0,0.16);
   z-index: 2;
   display : flex;
   align-items: center;
   justify-content: space-between;
   font-size: 1.25rem;
   font-weight:700;
   padding : 1rem;

   button {
       display : flex;
       align-items : center;
      font-weight:400;
      border : 0;
      outline : 0;
      pointer: cursor;

    svg{
        font-size: 1.5rem;
    }
}
`
const TextArea = styled.textarea`
    background:#ededed;
    font-size: 1rem;
    flex-grow : 1;
    resize : none;
    border : 0;
    outline :0;
    padding : 0.25rem;
`;
interface InputConsoleProps {
    currentInput:string;
    setCurrentInput:(newInput:string)=>void;
}
const InputConsole :React.FC<InputConsoleProps>= ({currentInput,setCurrentInput}) => {
    
  return (
    <Console>
        <Header>
            Input Console :
            {/* <button><BiImport/>Import Input</button> */}
        </Header>
        <TextArea value ={currentInput} onChange={(e)=>{
            setCurrentInput(e.target.value);
        }}></TextArea>
    </Console>
  )
}

export default InputConsole;