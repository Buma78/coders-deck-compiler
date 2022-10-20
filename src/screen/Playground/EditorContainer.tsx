import React, { useState } from 'react'
import CodeEditor from './CodeEditor'
import styled from 'styled-components'
import { BiEditAlt, BiExport, BiFullscreen, BiImport } from 'react-icons/bi'
import Select from 'react-select';
const StyledEditorContainer = styled.div`
display: flex;
flex-direction : column;
`
const UpperToolBar = styled.div`
    display : flex;
    align-items: center;
    justify-content:space-between;
    background :white;
    height : 4rem;
    padding :0.2rem;
`
const LowerToolBar = styled.div`
     background : white;
     height : 4rem;
     display : flex;
     justify-content : space-between;
     align-items : center;
     padding : 0.2rem;

     button{
        background : transparent;
        margin-right: 0.3rem;
        font-size: 1.3rem;
        border :0;
        outline :0;

        display : flex ;
        align-items : center;
        gap : 0.75rem;
       
       svg{
          font-size:1.3rem;
        }
     }
`
const Lowerbuttons= styled.div`
    display : flex;
    align-items : center;
    gap :  2.5rem;

`
const Runbutton = styled.button`
     padding : 0.8rem 2rem;
     background : #0097d7 !important;
     border-radius : 2rem;
     font-weight : 700;
`
const UppertoolTitle = styled.div`
    display : flex ;
    align-items : center;
    gap : 0.75rem;

    h3{
        font-size: 1.3rem;
    }
    button{
        background : transparent;
        font-size : 1.2rem;
        border : 0;
        outline : 0;
    }
`
const  Selectbars = styled.div`
      display : flex;
      align-items : center;
      gap : 1rem;

      & > div:nth-of-type(1){
        width : 11rem;
      }
      & > div:nth-of-type(2){
        width : 12rem;
      }
`
const EditorContainer = () => {
    const [languageSelected,setLanguageSelected] = useState(null);
    const [themeSelected,setThemeSelected] = useState(null);
    
    const languageOptions =[
        {value: "c++" ,label:"c++"},
        {value: "java" ,label:"java"},
        {value: "javascript" ,label:"javasript"},
        {value: "python" ,label:"python"},
    ]

    const themeOptions =[
        {value:"githubDark",label:"githubDark"},
        {value:"githubLight",label:"githubLight"},
        {value:"okaidia",label:"okaidia"},
        {value:"xcodeDark",label:"xcodeDark"},
        {value:"xcodeLight",label:"xcodeLight"},
        {value:"darcula",label:"darcula"},
        {value:"bespin",label:"bespin"},
        {value:"duotoneLight",label:"duotoneLight"},
        {value:"duotoneDark",label:"duotoneDark"},
    ]

    const handleSelectedLanguage = (selectedOption:any)=>{
        setLanguageSelected(selectedOption);
    }
    const handleSelectedTheme = (selectedOption:any)=>{
        setThemeSelected(selectedOption);
    }
    return (
    <StyledEditorContainer>
        <UpperToolBar>
            <UppertoolTitle>
                <h3>Stack implementation</h3>
                <button><BiEditAlt/></button>
            </UppertoolTitle>
            <Selectbars>
                <Select value={languageSelected}  options={languageOptions} onChange={handleSelectedLanguage}/>
                <Select value={themeSelected}  options={themeOptions} onChange={handleSelectedTheme}/>
            </Selectbars>
        </UpperToolBar>
        <CodeEditor/>
        <LowerToolBar>
            <Lowerbuttons>
                <button><BiFullscreen/>Full Screen</button>
                <button><BiImport/>Import Code</button>
                <button><BiExport/>Export Code</button>
            </Lowerbuttons>
            <Runbutton>Run Code</Runbutton>
        </LowerToolBar>
    </StyledEditorContainer>
  )
}

export default EditorContainer