import { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../Context/ModalContext';
import {MdClose} from "react-icons/md";
const Modalcomponent = styled.div`
       background : rgba(0,0,0,0.4);
       width : 100%;
       height : 100vh;
       Position: fixed;
       top : 0;
       left : 0;
       z-index: 2;

       display: flex;
       align-items:center;
       justify-content:center;
`;
const Modalcontent = styled.div`
     background:white;
     width:30%;
     padding: 2rem;
     border-radius:10px
`;
const Header = styled.h2`
    display : flex;
    align-items: center;
    justify-content : space-between;
`;
const Closebutton = styled.button`
     background :transparent;
     outline:0;
     border:0;
     font-size: 2rem;
     cursor : pointer;
`
const Modal = () => {
    const ModalFeatures = useContext(ModalContext);
    const setIsOpen = ModalFeatures?.setIsOpen;
  return (
  
         <Modalcomponent>
          <Modalcontent>
            <Header>
                <h2>cjxjx</h2>
                <Closebutton onClick={()=>{
                    if(setIsOpen) setIsOpen(false);
                }}>
                   < MdClose/>
                    </Closebutton>
            </Header>
            </Modalcontent>  
        </Modalcomponent>
    )
}

export default Modal;