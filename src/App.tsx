import GlobalStyles from './styles/Global';
import Homescreen from './screen/homescreen';
import ModalProvider from './Context/ModalContext';
import PlaygroundProvider from './Context/PlaygroundContext';
import Playground from './screen/Playground';
import {BrowserRouter,Routes,Route} from"react-router-dom";
import Page404 from './screen/Page404';
import { useContext } from 'react';
import { ThemeStyledContext } from './Context/ThemeContext';
import { ThemeProvider } from 'styled-components';

function App() {
  const {theme} = useContext(ThemeStyledContext)!;
  return (
    <ThemeProvider theme={theme}>
    <PlaygroundProvider>
   <ModalProvider>
    <GlobalStyles/>
    {/* <Homescreen/> */}
    {/* <Playground/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homescreen/>}/>
      <Route path="/code/:folderId/:playgroundId" element={<Playground/>}/>
      <Route path="*" element={<Page404/>}/>
    </Routes>
    </BrowserRouter>
   </ModalProvider>
   </PlaygroundProvider>
   </ThemeProvider>
  );
}

export default App;
