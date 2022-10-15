import React from 'react';
import Global from './styles/Global';
import Homescreen from './screen/homescreen';
import ModalProvider from './Context/ModalContext';
function App() {
  return (
   <ModalProvider>
    <Global/>
    <Homescreen/>
   </ModalProvider>
  );
}

export default App;
