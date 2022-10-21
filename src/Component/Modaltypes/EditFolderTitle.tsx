import React ,{useState,useContext}from 'react';
import {RiCloseFill} from 'react-icons/ri';
import { PlaygroundContext } from '../../Context/PlaygroundContext';
import { Closebutton,Header ,Input,ModalProps } from '../Modal';
const EditFolderTitle = ({closeModal,identifier }: ModalProps) => {

  const {folderId} = identifier;

  const {folders,editFolderTitle} = useContext(PlaygroundContext)!;

  const[title,setTitle] = useState(
    folders[folderId].title as string
  )
  return (
    <div>
      <Header>
        <h3> Edit Folder Modal</h3>
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
          editFolderTitle(folderId,title);
          closeModal();
        }}>Update Title</button>
      </Input>
    </div>
  )
}

export default EditFolderTitle;