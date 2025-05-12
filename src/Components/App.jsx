import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    const [noteData,setNoteData] = useState([]);

    function handleFormData(data){
        setNoteData(prev =>{
            return ([
                ...prev,
                data
            ])
        });
        console.log(noteData);
        
    }
    function deleteNote(id){
        console.log("trigger");
        setNoteData(prevNotes =>{
            return prevNotes.filter((noteItem,index)=>{
                return index !== id;
            })
        })
    }
    return (
        <div>
            <Header />
            <CreateArea sendData={handleFormData}/>
            {noteData.map((note,index)=>{
                return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote}/>
            })}
      
      <Footer />
        </div>
    );
}

export default App;