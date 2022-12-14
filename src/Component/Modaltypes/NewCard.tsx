import React ,{useState,useContext}from 'react';
import {RiCloseFill} from 'react-icons/ri';
import { PlaygroundContext } from '../../Context/PlaygroundContext';
import { Closebutton,Header ,Input,ModalProps } from '../Modal';
import Select from 'react-select';
const NewCard = ({closeModal,identifier }: ModalProps) => {
   const {folderId } = identifier;
   const languageOptions =[
    {value: "c++" ,label:"c++"},
    {value: "java" ,label:"java"},
    {value: "javascript" ,label:"javasript"},
    {value: "python" ,label:"python"},
  ]
  const {createNewPlayground} = useContext(PlaygroundContext)!;
  const[title,setTitle] = useState("")

  const[language,setLanguage] = useState(languageOptions[0])
  const handleLanguage = (selectedOption:any)=>{
    setLanguage(selectedOption);
}
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
        <Select options={languageOptions} value={language} onChange={handleLanguage}/>
        <button onClick={()=>{
          createNewPlayground(folderId,title,language.value);
          closeModal();
        }}>Update Title</button>
      </Input>
    </div>
  )
}

export default NewCard;