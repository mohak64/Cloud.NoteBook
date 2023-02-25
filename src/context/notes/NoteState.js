import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{

    const notesInitial = [
        {
          "_id": "63f9bbfef307b34266d0d54d",
          "user": "63f75a425cb6a523776c977d",
          "title": "my title",
          "description": "uthjaa",
          "tag": "per",
          "date": "2023-02-25T07:42:54.567Z",
          "__v": 0
        },
        {
          "_id": "63f9bc04f307b34266d0d54f",
          "user": "63f75a425cb6a523776c977d",
          "title": "my tire3rctle",
          "description": "uthc3cjaa",
          "tag": "per",
          "date": "2023-02-25T07:43:00.688Z",
          "__v": 0
        },
        {
          "_id": "63f9bc08f307b34266d0d551",
          "user": "63f75a425cb6a523776c977d",
          "title": "my tirc3ce3rctle",
          "description": "uthc3ccccjaa",
          "tag": "per",
          "date": "2023-02-25T07:43:04.347Z",
          "__v": 0
        }
      ]
      const [notes,setNotes]=useState(notesInitial)
    // const s1 = {
    //     "name": "Harry",
    //     "class": "5b"
    // }
    // const [state, setState] = useState(s1);

    // const update = ()=>{
    //     setTimeout(() => {
    //         setState({
    //             "name": "Larry",
    //             "class": "10b"
    //         })
    //     }, 1000);
    // }
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;