import React,{useEffect, useState} from 'react'
import CodeMirror from "@uiw/react-codemirror";
//themes
import {githubDark, githubLight} from "@uiw/codemirror-theme-github";
import {okaidia} from "@uiw/codemirror-theme-okaidia";
import {xcodeDark,xcodeLight} from "@uiw/codemirror-theme-xcode";
import {darcula} from "@uiw/codemirror-theme-darcula";
import {bespin} from"@uiw/codemirror-theme-bespin"; 
import {duotoneLight,duotoneDark} from "@uiw/codemirror-theme-duotone";
//languages
import {cpp} from "@codemirror/lang-cpp";
import{java} from "@codemirror/lang-java";
 import {javascript} from "@codemirror/lang-javascript";
 import {python} from "@codemirror/lang-python";
// //configuration
import {indentUnit} from "@codemirror/language";
import {EditorState} from "@codemirror/state";
import styled from 'styled-components';
import { FullScreen,} from "react-full-screen";


const CodeEditorContainer = styled.div`
   height: calc(100vh - 10.65rem);

   &>div{
    height:100%;
   }
`
interface FullScreenHandle {
  active: boolean;
  // Specifies if attached element is currently full screen.

  enter: () => Promise<void>;
  // Requests this element to go full screen.

  exit: () => Promise<void>;
  // Requests this element to exit full screen.

  node: React.MutableRefObject<HTMLDivElement | null>;
  // The attached DOM node
}
interface CodeEditorProps {
  CurrentLanguage : string,
  CurrentTheme : string,
  CurrentCode: string,
  setCurrentCode:(newCode:string)=> void;
  ShowFullScreen:FullScreenHandle;
}

const CodeEditor : React.FC<CodeEditorProps>=({CurrentLanguage,CurrentTheme,CurrentCode,setCurrentCode,ShowFullScreen})=>{
   
    const[theme,setTheme] = useState<any>(githubDark);
    const[lang,setLang] = useState<any>(java);

    useEffect(()=>{
      if(CurrentLanguage=== 'c++')setLang(cpp);
      if(CurrentLanguage=== 'java')setLang(java);
      if(CurrentLanguage=== 'javascript')setLang(javascript);
      if(CurrentLanguage=== 'Python')setLang(python);
    },[CurrentLanguage]);
    
    useEffect(()=>{
      if(CurrentTheme=== "githubDark")setTheme(githubDark);
      if(CurrentTheme=== "githubLight")setTheme(githubLight);
      if(CurrentTheme=== "okaidia")setTheme(okaidia);
      if(CurrentTheme=== "xcodeDark")setTheme(xcodeDark);
      if(CurrentTheme=== "xcodeLight")setTheme(xcodeLight);
      if(CurrentTheme=== "darcula")setTheme(darcula);
      if(CurrentTheme=== "bespin")setTheme(bespin);
      if(CurrentTheme=== "duotoneLight")setTheme(duotoneLight);
      if(CurrentTheme=== "duotoneDark")setTheme(duotoneDark);
    },[CurrentTheme]);
   
  let Screenheight ="100%"
  if(ShowFullScreen.active){
    Screenheight = '100vh';
  }else{
    Screenheight = '100%'
  }
  return (
    <FullScreen handle={ShowFullScreen}>
    <CodeEditorContainer>
     
        <CodeMirror
     theme={theme}
     value={CurrentCode }
     onChange={(value:string ,e:any)=>{
      setCurrentCode(value);
     }}
     height = {Screenheight}
     extensions={[
        lang,
        indentUnit.of(" "),
        EditorState.tabSize.of(8),
        EditorState.changeFilter.of(()=>true),
    ]}
    basicSetup={{
      lineNumbers: true,
      highlightActiveLineGutter: true,
      highlightSpecialChars: true,
      foldGutter: true,
      drawSelection: true,
      dropCursor: true,
      allowMultipleSelections: true,
      indentOnInput: true,
      syntaxHighlighting: true,
      bracketMatching: true,
      closeBrackets: true,
      autocompletion: true,
      rectangularSelection: true,
      crosshairCursor: true,
      highlightActiveLine: true,
      highlightSelectionMatches: true,
      closeBracketsKeymap: true,
      defaultKeymap: true,
      searchKeymap: true,
      historyKeymap: true,
      foldKeymap: true,
      completionKeymap: true,
      lintKeymap: true,
    }}/>
    </CodeEditorContainer>
    </FullScreen>
  )
}

export default CodeEditor;