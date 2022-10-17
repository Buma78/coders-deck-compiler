import { type } from '@testing-library/user-event/dist/type';
import {createContext,useState}from 'react';

interface PlaygroundContextType{
     folders: any;
     setfolders: any;
}
export const PlaygroundContext = createContext<PlaygroundContextType | null>(null);
export default function PlaygroundProvider({children}:{children:any}){
   const[folders,setfolders] = useState({
    ["1"]:{
     title:"folder title 1",
     items:{
       ["item1"]:{
         title:"stack implementation",
         language: "c++",
       },
       ["item2"]:{
         title:"stack implementation",
         language: "c++"
       },
       ["item3"]:{
         title:"stack implementation",
         language: "c++"
       },
     },
    },
    ["2"]:{
     title:"folder title 2",
     items:{
       ["item1"]:{
         title:"stack implementation",
         language: "c++",
       },
       ["item2"]:{
         title:"stack implementation",
         language: "c++"
       },
       ["item3"]:{
         title:"stack implementation",
         language: "c++"
       },
     },
    },
   });
   const makeavailableGlobally : PlaygroundContextType ={
        folders :folders,
        setfolders: setfolders,
   };
    return (< PlaygroundContext.Provider value={makeavailableGlobally}>
        {children}
        </PlaygroundContext.Provider>)
}