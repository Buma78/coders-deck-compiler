import React from 'react'
import { MdClose } from 'react-icons/md';
import { Closebutton, ModalProps } from '../Modal';
const EditCardTitle = ({closeModal,identifier }: ModalProps) => {
  return (
    <div>EditCardTitle
        <Closebutton onClick={()=>{
      closeModal();
    }}>
       < MdClose/>
        </Closebutton>
    </div>
  )
}

export default EditCardTitle