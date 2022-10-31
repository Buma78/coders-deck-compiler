import {useContext} from 'react'
import styled from 'styled-components';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import Modal from '../../Component/Modal';
import { ModalContext } from '../../Context/ModalContext';
 
const HomeScreenContainer = styled.div`
     position:relative;
     width :100%;
     height: 100vh;
`;
const Homescreen = () =>{
  const ModalFeatures = useContext(ModalContext);
  const isOpen = ModalFeatures?.isOpen;
  return (
    <div> 
        <HomeScreenContainer>
       <LeftPane/>
       <RightPane/>
      {isOpen?.value === true ?<Modal/>:<></>} 
       </HomeScreenContainer>
    </div>
  );
};

export default Homescreen;