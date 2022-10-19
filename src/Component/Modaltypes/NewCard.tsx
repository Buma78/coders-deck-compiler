import React from 'react'
import { MdClose } from 'react-icons/md';
import { Closebutton, ModalProps } from '../Modal';
const NewCard = ({closeModal,identifier }: ModalProps) => {
  return (
    <div>NewCard
        <Closebutton onClick={()=>{
      closeModal();
    }}>
       < MdClose/>
        </Closebutton>
    </div>
  )
}

export default NewCard;