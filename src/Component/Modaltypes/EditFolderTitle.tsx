import React from 'react'
import { MdClose } from 'react-icons/md';
import { Closebutton, ModalProps } from '../Modal';
const EditFolderTitle = ({closeModal,identifier }: ModalProps) => {
  return (
    <div>EditFolderTitle
        <Closebutton onClick={()=>{
      closeModal();
    }}>
       < MdClose/>
        </Closebutton>
    </div>
  )
}

export default EditFolderTitle