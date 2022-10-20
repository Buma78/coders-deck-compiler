import React from 'react'
import EditorContainer from './EditorContainer';
import InputConsole from './InputConsole';
import Navbar from './Navbar';
import OutputConsole from './OutputConsole';
import styled from 'styled-components';

const MainApp = styled.div`
      display: grid;
      grid-template-columns: 2fr 1fr;
      background : red;
      height:100%;
`;
const Consoles = styled.div`
       display : grid;
       grid-template-columns: 1fr;
       grid-template-rows: 1fr 1fr;
`;
const Playground = () => {
  return (
    <>
        <Navbar/>
        <MainApp>
            <EditorContainer/>
            <Consoles>
                <InputConsole/>
                <OutputConsole/>
            </Consoles>
        </MainApp>
    </>
  )
}

export default Playground;