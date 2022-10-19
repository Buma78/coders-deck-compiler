import { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../Context/ModalContext';
import {MdClose} from "react-icons/md";
import { PlaygroundContext } from '../Context/PlaygroundContext';
import EditCardTitle from './Modaltypes/EditCardTitle';
import EditFolderTitle from './Modaltypes/EditFolderTitle';
import NewCard from './Modaltypes/NewCard';
import NewFolder from './Modaltypes/NewFolder';
export const Modalcomponent = styled.div`
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
 export const Modalcontent = styled.div`
     background:white;
     width:30%;
     padding: 2rem;
     border-radius:10px
`;
export const Header = styled.h2`
    display : flex;
    align-items: center;
    justify-content : space-between;
`;
export const Closebutton = styled.button`
     background :transparent;
     outline:0;
     border:0;
     font-size: 2rem;
     cursor : pointer;
` 
export const Input = styled.div`
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
const EditModal =({closeModal,isOpen}:{closeModal:()=>void,isOpen:any})=>{
    const PlaygroundFeatures = useContext(PlaygroundContext)!;
    const folders = PlaygroundFeatures.folders;

    const Currentfolder = folders[isOpen.identifier.folderId];
    const CurrentCard = Currentfolder.items[isOpen.identifier.cardId];
    return <>
    <Header>
    <h2>Edit Cards Title</h2>
    <Closebutton onClick={()=>{
      closeModal();
    }}>
       < MdClose/>
        </Closebutton>
    </Header>
   <Input>
       <input type="text" value={CurrentCard.title}/>
       <button>Update Input</button>
   </Input>
</>
}

export interface ModalProps{
  closeModal :()=>void;
  identifier :{
    folderId: string;
    cardId: string;
  }
}
const Modal = () => {
    const ModalFeatures = useContext(ModalContext)!;
    const {closeModal} = ModalFeatures;
    const isOpen = ModalFeatures.isOpen;
  return (
  
         <Modalcomponent>
          <Modalcontent>
            {isOpen.type ==="1"&& <EditCardTitle closeModal={closeModal} identifier={isOpen.identifier}/>}
            {isOpen.type ==="2"&& <EditFolderTitle closeModal={closeModal} identifier={isOpen.identifier}/>}
            {isOpen.type ==="3"&& <NewCard closeModal={closeModal} identifier={isOpen.identifier}/>}
            {isOpen.type ==="4"&& <NewFolder closeModal={closeModal} identifier={isOpen.identifier}/>}
            </Modalcontent>  
        </Modalcomponent>
    )
}

export default Modal;