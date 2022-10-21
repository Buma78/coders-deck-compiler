import { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../Context/ModalContext';
import EditCardTitle from './Modaltypes/EditCardTitle';
import EditFolderTitle from './Modaltypes/EditFolderTitle';
import NewCard from './Modaltypes/NewCard';
import NewFolder from './Modaltypes/NewFolder';
import NewFolderAndPlayground from './Modaltypes/NewFolderAndPlayground';
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
     width:40%;
     padding: 2rem;
     border-radius:10px
`;
export const Header = styled.div`
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
        height:2.5rem;
      }
      button{
        background:#241f21;
        height:2rem;
        color:white;
        padding:0 2rem;
      }
`
export const InputWithSelect = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  row-gap: 1rem;
  column-gap: 1rem;
  margin-top: 1.2rem;
  align-items: center;
  input {
    flex-grow: 1;
    height: 2rem;
  }
  button {
    background: #241f21;
    height: 2rem;
    color: white;
    padding: 0 2rem;
  }
`;
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
            {isOpen.type ==="5"&& <NewFolderAndPlayground closeModal={closeModal} identifier={isOpen.identifier}/>}
            </Modalcontent>  
        </Modalcomponent>
    )
}

export default Modal;