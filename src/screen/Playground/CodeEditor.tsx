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
const CodeEditor = () => {
    const[theme,setTheme] = useState<any>(githubDark);
    const[lang,setLang] = useState<any>(python);
  return (
    <div><CodeMirror theme={theme} extensions={[
        lang,
        indentUnit.of("    "),
        EditorState.tabSize.of(8),
        EditorState.changeFilter.of(()=>true),
    ]}/></div>
  )
}

export default CodeEditor;