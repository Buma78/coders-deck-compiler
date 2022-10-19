import React from 'react'
import { MdClose } from 'react-icons/md';
import { Closebutton, ModalProps } from '../Modal';
const NewFolder = ({closeModal,identifier }: ModalProps) => {
  return (
    <div>NewFolder
        <Closebutton onClick={()=>{
      closeModal();
    }}>
       < MdClose/>
        </Closebutton>
    </div>
  )
}

export default NewFolder;