import React from 'react';
import styled from "styled-components";

const Modalcontainer = styled.div`
background:red;
width:100%;
height:100vh;
postion :fixed;
top:0;
left:0;
z-index:2;

display:flex;
align-items:center;
justify-content:center;
`;
const Modalcontent = styled.div`
background:white;
width:30%;
padding:2rem;
`
function Modal() {
  return (
    <Modalcontainer >
        <Modalcontent>my name </Modalcontent>
        </Modalcontainer>
  )
}

export default Modal;