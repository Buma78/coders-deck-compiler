import React ,{useContext}from 'react'
import EditorContainer from './EditorContainer';
import InputConsole from './InputConsole';
import Navbar from './Navbar';
import OutputConsole from './OutputConsole';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { PlaygroundContext } from '../../Context/PlaygroundContext';
import {ModalContext} from '../../Context/ModalContext';
import Modal from '../../Component/Modal';

const MainApp = styled.div`
      display: grid;
      grid-template-columns: 2fr 1fr;
      height:100%;
`;
const Consoles = styled.div`
       display : grid;
       grid-template-columns: 1fr;
       grid-template-rows: 1fr 1fr;
`;
const Playground = () => {
  const {folderId,playgroundId}= useParams();
  const { isOpen } = useContext(ModalContext)!;
  const {folders}= useContext(PlaygroundContext)!;
  const {title,language,code} = folders[folderId as string].items[playgroundId as string];
    return (
    <>
        <Navbar/>
        <MainApp>
            <EditorContainer title={title} language={language} code={code} folderId ={folderId as string} cardId={playgroundId as string}/>
            <Consoles>
                <InputConsole/>
                <OutputConsole/>
            </Consoles>
        </MainApp>
        {isOpen?.value === true ?<Modal/>:<></>} 
    </>
  )
}

export default Playground;