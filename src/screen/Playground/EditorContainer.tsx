import React, { useContext, useState } from 'react'
import CodeEditor from './CodeEditor'
import styled from 'styled-components'
import { BiEditAlt, BiExport, BiImport,BiFullscreen } from 'react-icons/bi'
import Select from 'react-select';
import { ModalContext } from '../../Context/ModalContext';
import { languageMap } from '../../Context/PlaygroundContext';
import {useFullScreenHandle } from "react-full-screen";

const StyledEditorContainer = styled.div`
display: flex;
flex-direction : column;
`
const UpperToolBar = styled.div`
    background:${({theme})=>theme.background};
    display : flex;
    align-items: center;
    justify-content:space-between;
    height : 4rem;
    padding :0.2rem;
`
const LowerToolBar = styled.div`
     background:${({theme})=>theme.background};
     color:${({theme})=>theme.color};
     height : 4rem;
     display : flex;
     justify-content : space-between;
     align-items : center;
     padding : 0.2rem;

        button,label{
        background : transparent;
        color:${({theme})=>theme.color};
        margin-right: 0.3rem;
        font-size: 1.3rem;
        border :0;
        outline :0;
        cursor: pointer;
        
        display : flex ;
        align-items : center;
        gap : 0.75rem;
        &:hover{
          opacity:0.75;
        }
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
const Savebutton = styled.button`
     padding : 0.5rem 1rem;
     background : #0097d7 !important;
     border-radius : 2rem;
     font-weight : 700;
     border :0;
     outline :0;
`
const Runbutton = styled.button`
     padding : 0.8rem 2rem;
     background : 	#FFA500 !important;
     border-radius : 2rem;
     font-weight : 700;
`
const UppertoolTitle = styled.div`
    color:${({theme})=>theme.color};
    display : flex ;
    align-items : center;
    gap : 0.75rem;

    h3{
        font-size: 1.3rem;
    }
    button{
        background : transparent;
        color:${({theme})=>theme.color};
        font-size : 1.2rem;
        border : 0;
        outline : 0;
    }
`
const  Selectbars = styled.div`
      background : transparent;
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
interface EditorContainerProps{
    title :string,
    currentLanguage : string;
    currentCode :string;
    setCurrentLanguage:(newLang:string)=>void;
    setCurrentCode:(newCode:string)=>void;
    folderId:string;
    cardId:string;
    saveCode:()=>void;
    runCode:()=>void;
}
const EditorContainer: React.FC<EditorContainerProps>=({title,currentLanguage,currentCode,setCurrentLanguage,setCurrentCode, folderId,cardId,saveCode,runCode})=> {

    const {openModal}= useContext(ModalContext)!;
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
    const [languageSelected,setLanguageSelected] = useState(()=>{
      for(let i=0;i<languageOptions.length;i++){
        if(languageOptions[i].value===currentLanguage)return languageOptions[i];
      }
      return languageOptions[0];
    }
    );
    const [themeSelected,setThemeSelected] = useState({value:"githubDark",label:"githubDark"});
    
    

    const handleSelectedLanguage = (selectedOption:any)=>{
        setLanguageSelected(selectedOption);
        setCurrentLanguage(selectedOption.value);
        setCurrentCode(languageMap[selectedOption.value].defaultCode);
    }
    const handleSelectedTheme = (selectedOption:any)=>{
        setThemeSelected(selectedOption);
    } 
    
    const getFile = (e: any) => {
        const input = e.target;
    
        if ("files" in input && input.files.length > 0) {
          placeFileContent(input.files[0]);
        }
      };
    
      const placeFileContent = (file: any) => {
        readFileContent(file)
          .then((content) => {
            setCurrentCode(content as string);
          })
          .catch((error) => console.log(error));
      };
    
      function readFileContent(file: any) {
        const reader = new FileReader();
        return new Promise((resolve, reject) => {
          reader.onload = (event) => resolve(event!.target!.result);
          reader.onerror = (error) => reject(error);
          reader.readAsText(file);
        });
      }
      
      const exportUserInfo =(userInfo:any)=> {
        const blob = new Blob([userInfo], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "user-info.txt";
        link.href = url;
        link.click();
      }
      
      const ShowFullScreen = useFullScreenHandle();
    return (
    <StyledEditorContainer>
        <UpperToolBar>
            <UppertoolTitle>
                <h3>{title}</h3>
                <button onClick={()=>{
                    openModal({
                        value:true,
                        type: "1",
                        identifier:{
                            folderId:folderId,
                            cardId: cardId,
                        }
                    })
                }}><BiEditAlt/></button>
            </UppertoolTitle>
            <Selectbars>
                <Savebutton onClick={()=>{
                    saveCode();
                }}>save Code</Savebutton>
                <Select value={languageSelected}  options={languageOptions} onChange={handleSelectedLanguage}/>
                <Select value={themeSelected}  options={themeOptions} onChange={handleSelectedTheme}/>
            </Selectbars>
        </UpperToolBar>
        <CodeEditor CurrentLanguage={languageSelected.value} CurrentTheme={themeSelected.value} CurrentCode={currentCode} setCurrentCode={setCurrentCode} ShowFullScreen={ShowFullScreen}/>
        <LowerToolBar>
            <Lowerbuttons>
              <button onClick={ShowFullScreen.enter}><BiFullscreen/>FullScreen</button>
                <label> <input type='file'accept='.txt' style={{ display: "none" }} onChange={(e) => {
                 getFile(e);
              }}
            /><BiImport/>Import Code</label>
                <button onClick={()=>exportUserInfo(currentCode)}><BiExport/>Export Code</button>
            </Lowerbuttons>
            <Runbutton onClick={() => {
            runCode();
          }}>Run Code</Runbutton>
        </LowerToolBar>
    </StyledEditorContainer>
  )
}

export default EditorContainer