import GlobalStyles from './styles/Global';
import Homescreen from './screen/homescreen';
import ModalProvider from './Context/ModalContext';
import PlaygroundProvider from './Context/PlaygroundContext';
import Playground from './screen/Playground';
import {BrowserRouter,Routes,Route} from"react-router-dom";
import Page404 from './screen/Page404';

function App() {
  return (
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
  );
}

export default App;
