import React,{useState} from 'react'
import CodeMirror from "@uiw/react-codemirror";
//themes
import {githubDark,githubLight} from "@uiw/codemirror-theme-github";
import {okaidia} from "@uiw/codemirror-theme-okaidia";
import {xcodeDark,xcodeLight} from "@uiw/codemirror-theme-xcode";
import {darcula} from "@uiw/codemirror-theme-darcula";
import {bespin} from"@uiw/codemirror-theme-bespin";
import {duotoneLight,duotoneDark} from "@uiw/codemirror-theme-duotone";
//languages
import {cpp} from "@codemirror/lang-cpp";
import {java} from "@codemirror/lang-java";
import {javascript} from "@codemirror/lang-javascript";
import {python} from "@codemirror/lang-python";
//configuration
import {indentUnit} from "@codemirror/language";
import {EditorState} from "@codemirror/state";
import styled from 'styled-components';

const CodeEditorContainer = styled.div`
   height: calc(100vh - 11rem);

   &>div{
    height:100%;
   }
`
const CodeEditor = () => {
    const[theme,setTheme] = useState<any>(githubDark);
    const[lang,setLang] = useState<any>(python);
  return (
    <CodeEditorContainer>
        <CodeMirror
     theme={theme}
     height = '100%'
     extensions={[
        lang,
        indentUnit.of("    "),
        EditorState.tabSize.of(8),
        EditorState.changeFilter.of(()=>true),
    ]}/></CodeEditorContainer>
  )
}

export default CodeEditor;