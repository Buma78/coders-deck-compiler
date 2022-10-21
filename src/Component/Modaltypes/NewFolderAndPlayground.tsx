import React ,{useState,useContext}from 'react';
import {RiCloseFill} from 'react-icons/ri';
import { PlaygroundContext } from '../../Context/PlaygroundContext';
import { Closebutton,Header,InputWithSelect,ModalProps } from '../Modal';
import Select from 'react-select';
const NewFolderAndPlayground = ({closeModal,identifier }: ModalProps) => {
   const languageOptions =[
    {value: "c++" ,label:"c++"},
    {value: "java" ,label:"java"},
    {value: "javascript" ,label:"javasript"},
    {value: "python" ,label:"python"},
  ]
  const {createNewFolderAndPlayground} = useContext(PlaygroundContext)!;
  const[folderTitle,setFolderTitle] = useState("");
  const[cardTitle,setCardTitle] = useState("")

  const[language,setLanguage] = useState(languageOptions[0])
  const handleLanguage = (selectedOption:any)=>{
    setLanguage(selectedOption);
}
  return (
    <div>
      <Header>
        <h3>New Folder And Playground</h3>
        <Closebutton onClick ={()=>{
          closeModal();
        }} >
          <RiCloseFill/>
        </Closebutton>
      </Header>
      <InputWithSelect>
         <label>Folder Title</label>
        <input type='text' value={folderTitle} onChange={(e)=>{
          setFolderTitle(e.target.value);
        }}/>
        <label>card Title</label>
        <input type='text' value={cardTitle} onChange={(e)=>{
          setCardTitle(e.target.value);
        }}/>
        <Select options={languageOptions} value={language} onChange={handleLanguage}/>
        <button onClick={()=>{
          createNewFolderAndPlayground(folderTitle ,cardTitle,language.value);
          closeModal();
        }}>Update Title</button>
      </InputWithSelect>
    </div>
  )
}

export default NewFolderAndPlayground;