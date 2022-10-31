import {useContext} from 'react'
import styled from 'styled-components';
import { IoTrashOutline } from "react-icons/io5";
import { BiEditAlt } from "react-icons/bi";
//import { BsSunFill,BsSun } from "react-icons/bs";
import { ModalContext } from '../../Context/ModalContext';
import { PlaygroundContext } from '../../Context/PlaygroundContext';
import {useNavigate} from 'react-router-dom';

interface HeaderProps {
    readonly variant: string;
  }
  
interface HeadingProps {
    readonly size: string;
  }
const StyledRightpane = styled.div`
    padding:2rem;
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
  cursor : pointer;
  transition:all 0.1s ease;
  &:hover{
    opacity:0.75;
  }
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
  margin-right : 0.5rem;
`;

const FolderButton=styled.div`
       display :flex;
       align-items: center;

`
const RightPane = () => {
 
  const navigate = useNavigate();
  const makeavailableGlobally = useContext(ModalContext)!;
  const {openModal} = makeavailableGlobally;

  const PlaygroundFeatures = useContext(PlaygroundContext)!;
  const Folders = PlaygroundFeatures.folders;
  const {deleteCard,deleteFolder} = PlaygroundFeatures;

  // const icon = true ? <BsSunFill/>:<BsSun/>;
  // const changeTheme =()=>{

  // }
  return (
    <div>
        
        <StyledRightpane>
        <Header variant='main'>
        <Heading size='large'>
             my <span>Playgrounds</span>
        </Heading>
        {/* <Addbutton onClick={()=>changeTheme()}>{icon}</Addbutton> */}
        <Addbutton onClick={()=>{
          openModal({
            value:true,
            type:"4",
            identifier:{
               folderId: "",
               cardId: ""
            }
          })
        }

        }>
            <span>+</span>New Folder
        </Addbutton>
        </Header>  
        
         {Object.entries(Folders).map(([folderId,folder]:[folderId:string,folder:any]) => (
           <Folder key={folderId}>
           <Header variant='folder'>
               <Heading size='small'>{folder.title}</Heading>
               <FolderButton>
               <Icons>
                 <IoTrashOutline onClick={()=>{
                  deleteFolder(folderId);
                 }}/>
                 <BiEditAlt onClick={()=>{
          openModal({
            value:true,
            type:"2",
            identifier:{
               folderId: folderId,
               cardId: ""
            }
          })
        }}/>
               </Icons>
               <Addbutton onClick={()=>{
          openModal({
            value:true,
            type:"3",
            identifier:{
               folderId: folderId,
               cardId: ""
            }
          })
        }}>
                   <span>+</span>New Playground
               </Addbutton>
               </FolderButton>
               
           </Header>
           <Cardcontainer>
            {Object.entries(folder.items).map(([cardId,card]:[cardId:string,card:any]) =>(
                <Playgroundcard key={cardId}
                onClick={()=>{
                  navigate(`/code/${folderId}/${cardId}`);
                }}>
                <SmallLogo src='/logo-small.png' alt='' />
                  <CardContent>
                      <h5>{card.title}</h5>
                      <p>{card.language}</p>
                 </CardContent>
               <Icons  onClick={(e) => {
                        e.stopPropagation();
                      }}>
                 <IoTrashOutline onClick={()=>{
                  deleteCard(folderId,cardId);
                 }}/>
                 <BiEditAlt onClick={()=>{openModal({
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