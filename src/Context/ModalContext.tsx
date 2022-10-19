import { type } from '@testing-library/user-event/dist/type';
import {createContext,useState}from 'react';

interface Popfields{
    value:boolean;
    type:string;
    identifier:{
        folderId:string,
        cardId:string,
    }
}
interface ModalContextType{
    isOpen:Popfields;
    openModal :(value:Popfields)=>void;
    closeModal :()=> void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalProvider({children}:{children:any}){
    const intialPopupfields :Popfields={
        value:false,
        type:"",
        identifier:{
            folderId:"",
            cardId:"",
        }
    }
    const[isOpen,setIsOpen] = useState<Popfields>({...intialPopupfields});
    
    const openModal = (value:Popfields)=>{
        setIsOpen(value);
    }

    const cloaseModal =()=>{
        setIsOpen({...intialPopupfields});
    }
    const makeavailableGlobally :ModalContextType={
        isOpen:isOpen,
        openModal:openModal,
        closeModal:cloaseModal
    }
    return (< ModalContext.Provider value={makeavailableGlobally}>
        {children}
        </ModalContext.Provider>)
}