import React from 'react'
import styled from 'styled-components';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import Modal from '../../components/Modal';
 
const HomeScreenContainer = styled.div`
     position:relative;
     width :100%;
     height: 100vh;
`;
const Homescreen= () =>{

  return (
    <div> 
        <HomeScreenContainer>
       <LeftPane/>
       <RightPane/>
       <Modal/>
       </HomeScreenContainer>
    </div>
  );
};

export default Homescreen;