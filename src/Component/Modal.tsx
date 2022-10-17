import { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../Context/ModalContext';
import {MdClose} from "react-icons/md";
import { PlaygroundContext } from '../Context/PlaygroundContext';
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
const Input = styled.div`
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding : 1.5rem 0;
      gap:2rem;
      padding-bottom:0;

      input{
        flex-grow:1;
        hieght:2rem;
      }
      button{
        background:#241f21;
        height:2rem;
        color:white;
        padding:0 2rem;
      }
`
const EditModal =({setIsOpen,isOpen}:{setIsOpen:any,isOpen:any})=>{
    const PlaygroundFeatures = useContext(PlaygroundContext)!;
    const folders = PlaygroundFeatures.folders;

    const Currentfolder = folders[isOpen.identifier.folderId];
    const CurrentCard = Currentfolder.items[isOpen.identifier.cardId];
    return <>
    <Header>
    <h2>Edit Cards Title</h2>
    <Closebutton onClick={()=>{ setIsOpen({
       value:false,
       type:"",
       identifier:{
        folderId:"",
        cardId:"",
       }
     })}}>
       < MdClose/>
        </Closebutton>
    </Header>
   <Input>
       <input type="text" value={CurrentCard.title}/>
       <button>Update Input</button>
   </Input>
</>
}

const Modal = () => {
    const ModalFeatures = useContext(ModalContext)!;
    const setIsOpen = ModalFeatures.setIsOpen;
    const isOpen = ModalFeatures.isOpen;
  return (
  
         <Modalcomponent>
          <Modalcontent>
            {isOpen.type ==="1"&& <EditModal setIsOpen={setIsOpen} isOpen={isOpen}/>}
            </Modalcontent>  
        </Modalcomponent>
    )
}

export default Modal;