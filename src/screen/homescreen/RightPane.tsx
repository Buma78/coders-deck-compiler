import {useContext} from 'react'
import styled from 'styled-components';
import { IoTrashOutline } from "react-icons/io5";
import { BiEditAlt } from "react-icons/bi";
import { ModalContext } from '../../Context/ModalContext';

interface HeaderProps {
    readonly variant: string;
  }
  
interface HeadingProps {
    readonly size: string;
  }
const StyledRightpane = styled.div`
    padding:2rem;
    background:#fafafa;
    position:absolute;
    right:0;
    top:0;
    width:60%;
`
const Header=styled.div<HeaderProps>`
       display: flex;
       align-items:center;
       justify-content:space-between;
       position: relative;
       margin-bottom:${(props) =>
        props.variant === "main" ? "2.75rem" : "1.4rem"};

       &::after{
        position: absolute;
        content:"";
        bottom:-1.25rem;
        width:100%;
        height:2px;
        background:rgba(0,0,0,0.25);
        display: ${(props) => (props.variant === "main" ? "block" : "none")};
       }
`
const Heading=styled.h3<HeadingProps>`
    font-weight:400;
    font-size:1,8rem;
    span{
        font-weight:700;
    }
`
const Addbutton = styled.button`
  display:flex;
  gap:0.5rem;
  align-items:center;
  background:transparent;
  outline:0;
  border:0;
  font-size:1.1rem;
  cursor:pointer;
  
  span{
    font-size:1.75rem;
    font-weight:700;
  }
  
  transition:all 0.25s ease;
  &:hover{
    opacity:0.75;
    scale:1.1;
  }
`
const Folder=styled.div`
     margin-top: 0.5rem;
`
const Cardcontainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
`;

const Playgroundcard = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem;
  gap: 1rem;
  box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.35);
`;
const SmallLogo = styled.img`
  width: 75px;
`;

const CardContent = styled.div`
  flex-grow: 1;
  h5 {
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 1.25rem;
`;
const RightPane = () => {
  const makeavailableGlobally = useContext(ModalContext)!;
  const setIsOpen = makeavailableGlobally.setIsOpen;

  const folders = {
   ["1"]:{
    title:"folder title 1",
    items:{
      ["item1"]:{
        title:"stack implementation",
        language: "c++",
      },
      ["item2"]:{
        title:"Queue implementation",
        language: "c++"
      },
      ["item3"]:{
        title:"LinkedList implementation",
        language: "c++"
      },
    },
   },
   ["2"]:{
    title:"folder title 2",
    items:{
      ["item1"]:{
        title:"stack implementation 1",
        language: "c++",
      },
      ["item2"]:{
        title:"stack implementation 2",
        language: "c++"
      },
      ["item3"]:{
        title:"stack implementation 3",
        language: "c++"
      },
    },
   },
  }
  return (
    <div>
        <StyledRightpane>
        <Header variant='main'>
        <Heading size='large'>
             my <span>Playground</span>
        </Heading>
        <Addbutton>
            <span>+</span>New Folder
        </Addbutton>
        </Header>  
        
         {Object.entries(folders).map(([folderId,folder]) => (
           <Folder>
           <Header variant='folder'>
               <Heading size='small'>{folder.title}</Heading>
               <Addbutton>
                   <span>+</span>New Playground
               </Addbutton>
           </Header>
           <Cardcontainer>
            {Object.entries(folder.items).map(([cardId,card]) =>(
                <Playgroundcard>
                <SmallLogo src='/logo-small.png' alt='' />
                  <CardContent>
                      <h5>{card.title}</h5>
                      <p>{card.language}</p>
                 </CardContent>
               <Icons>
                 <IoTrashOutline />
                 <BiEditAlt onClick={()=>{setIsOpen({
                   value:true,
                   type:"1",
                   identifier:{
                    folderId:folderId,
                    cardId:cardId,
                   }
                 })}}/>
               </Icons>
                </Playgroundcard>
            ))}
             </Cardcontainer>
       </Folder>
       ))}
        </StyledRightpane>
    </div>
  );
};

export default RightPane;