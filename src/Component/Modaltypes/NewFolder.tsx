import React ,{useState,useContext}from 'react';
import {RiCloseFill} from 'react-icons/ri';
import { PlaygroundContext } from '../../Context/PlaygroundContext';
import { Closebutton,Header ,Input,ModalProps } from '../Modal';
const NewFolder = ({closeModal,identifier }: ModalProps) => {

  const {createNewFolder} = useContext(PlaygroundContext)!;

  const[title,setTitle] = useState("")
  return (
    <div>
      <Header>
        <h3>Create New Folder</h3>
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
          createNewFolder(title);
          closeModal();
        }}>Update Title</button>
      </Input>
    </div>
  )
}

export default NewFolder;