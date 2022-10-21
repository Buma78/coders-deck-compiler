import React ,{useState,useContext}from 'react';
import {RiCloseFill} from 'react-icons/ri';
import { PlaygroundContext } from '../../Context/PlaygroundContext';
import { Closebutton,Header ,Input,ModalProps } from '../Modal';
const EditCardTitle = ({closeModal,identifier }: ModalProps) => {

  const {folderId,cardId} = identifier;

  const {folders,editCardTitle} = useContext(PlaygroundContext)!;

  const[title,setTitle] = useState(
    folders[folderId].items[cardId].title as string
  )
  return (
    <div>
      <Header>
        <h3> Edit Card Modal</h3>
        <Closebutton onClick ={()=>{
          closeModal();
        }} >
          <RiCloseFill/>
        </Closebutton>
      </Header>
      <Input>
        <input type='text' value={title} onChange={(e)=>{
          setTitle(e.target.value);
        }}/>
        <button onClick={()=>{
          editCardTitle(folderId,cardId,title);
          closeModal();
        }}>Update Title</button>
      </Input>
    </div>
  )
}

export default EditCardTitle