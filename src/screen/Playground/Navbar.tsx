import React from 'react'
import styled from 'styled-components';

const NavbarContainer = styled.div`
height: 4.5 rem;
background : #241f21;
display:flex;
align-items:center;
justify-content:center;
`
const Navbarcontent =styled.div`
    display: flex;
    align-items :center;
    gap: 0.9 rem;
`;
const Logo = styled.img`
    width: 45px;
`;
const MainHeading = styled.h1`
    font-size: 1.9rem;
    font-weight: 400;
    color: white;

    span {
        font-weight: 700;
    }
`;
const Navbar = () => {
  return (
    <NavbarContainer>
        <Navbarcontent>
             <Logo src='/logo.png'/>
             <MainHeading>
               <span>code</span>Deck
             </MainHeading>
        </Navbarcontent>
    </NavbarContainer>
  )
}

export default Navbar