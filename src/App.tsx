import React from 'react';
import Global from './styles/Global';
import Homescreen from './screen/homescreen';
import ModalProvider from './Context/ModalContext';
import PlaygroundProvider from './Context/PlaygroundContext';
function App() {
  return (
    <PlaygroundProvider>
   <ModalProvider>
    <Global/>
    <Homescreen/>
   </ModalProvider>
   </PlaygroundProvider>
  );
}

export default App;
