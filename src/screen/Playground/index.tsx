import React from 'react'
import EditorContainer from './EditorContainer';
import InputConsole from './InputConsole';
import Navbar from './Navbar';
import OutputConsole from './OutputConsole';
const Playground = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <EditorContainer/>
            <div>
                <InputConsole/>
                <OutputConsole/>
            </div>
        </div>
    </div>
  )
}

export default Playground;