import {createContext,useState,useEffect}from 'react';
import {v4 as uuid} from"uuid";
interface PlaygroundContextType{
     folders: any;
     setfolders: any;
     createNewFolder :(folderTitle:string)=>void;
     createNewPlayground: (folderId: string,cardTitle: string,cardLanguage: string ) => void;
     createNewFolderAndPlayground :(folderTitle:string,cardTitle:string,cardLanguage:string)=>void;
     editCardTitle : (folderID:string,cardId:string, newCardTitle:string)=>void;
     editFolderTitle : (folderID:string,newFolderTitle:string)=>void;
     deleteCard : (folderID:string,cardId:string)=>void;
     deleteFolder : (folderID:string)=>void;
}
export const PlaygroundContext = createContext<PlaygroundContextType | null>(null);

export interface foldertype {
  [key: string]: {
      title: string;
      items: {
          [key: string]: {
              title: string;
              language: string;
          };
      };
  };
}
export const languageMap : {
  [key:string]:{
    defaultCode:string,
  }
}={
  "c++": {
    defaultCode:
      "# include <iostream>\n" +
      "\n" +
      "int main() {\n" +
      "    // your code here\n" +
      "    return 0;\n" +
      "}"
      },
  "python": {
    defaultCode: "# your python code here",
  },
 "javascript": {
    defaultCode: "// your javascript code here",
  },
  "java": {
    defaultCode: `import java.util.*;\nimport java.lang.*;\nimport java.io.*;\n\npublic class Main\n{\n\tpublic static void main (String[] args) throws java.lang.Exception\n\t{\n\t\t//your code here\n\t}\n}`,
  },
};
const initialItems = {
  [uuid()]:{
   title:"folder title 1",
   items:{
     [uuid()]:{
       title:"stack implementation",
       language: "c++",
       code : languageMap["c++"].defaultCode,
     },
   },
  },
 };
export default function PlaygroundProvider({children}:{children:any}){
   const[folders,setfolders] = useState(()=>{
    let localData = JSON.parse(
      localStorage.getItem("playground-data") as string
   )
   localData = localData === undefined || localData === null ||Object.keys(localData).length === 0 ? null : localData;
    return localData || initialItems;
   });
   useEffect(() =>{
       localStorage.setItem("playground-data",JSON.stringify(folders));
   },[folders]);
   const createNewFolder =(folderTitle:string)=>{
       setfolders((oldState:any)=>{
        const newState = {...oldState};
        newState[uuid()]={
          title:folderTitle,
          items:{},
        };
        return newState;
       })
   }
   const createNewPlayground = (
    folderId: string,
    cardTitle: string,
    cardLanguage: string
  ) => {
    setfolders((oldState: any) => {
      const newState = { ...oldState };
      // create a new playground
      newState[folderId].items[uuid()] = {
        title: cardTitle,
        language: cardLanguage,
        code: languageMap[cardLanguage].defaultCode,
      };
      return newState;
    });
  };
   const createNewFolderAndPlayground =(folderTitle:string,cardTitle:string,cardLanguage:string)=>{
    setfolders((oldState:any)=>{
     const newState = {...oldState};
     newState[uuid()]={
       title:folderTitle,
       items:{[uuid()]:{
        title:cardTitle,
        language: cardLanguage,
        code: languageMap[cardLanguage].defaultCode,
      }},
     };
     return newState;
    })
}

   const editCardTitle = (folderID:string,cardId:string, newCardTitle:string)=>{
    setfolders((oldState:any)=>{
      const newState= {...oldState};
      newState[folderID].items[cardId].title= newCardTitle;
      return newState;
    })
   }

   const editFolderTitle = (folderID:string,newFolderTitle:string)=>{
    setfolders((oldState:any)=>{
      const newState= {...oldState};
      newState[folderID].title=newFolderTitle;
      return newState;
    })
   }

   const deleteCard = (folderID:string,cardId:string)=>{
    setfolders((oldState:any)=>{
      const newState= {...oldState};
      delete newState[folderID].items[cardId];
      return newState;
    })
   }

   const deleteFolder = (folderID:string)=>{
    setfolders((oldState:any)=>{
      const newState= {...oldState};
      delete newState[folderID];
      return newState;
    })
   }
   const makeavailableGlobally : PlaygroundContextType ={
        folders :folders,
        setfolders: setfolders,
        createNewFolder :createNewFolder,
        createNewPlayground: createNewPlayground,
        createNewFolderAndPlayground : createNewFolderAndPlayground,
        editCardTitle :  editCardTitle,
        editFolderTitle :  editFolderTitle,
        deleteCard : deleteCard,
        deleteFolder : deleteFolder,
   }
    return (< PlaygroundContext.Provider value={makeavailableGlobally}>
        {children}
        </PlaygroundContext.Provider>)
}