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
    return (
        <div>
            <Header />
            <CreateArea sendData={handleFormData}/>
            {noteData.map((note)=>{
                return <Note title={note.title} content={note.content} />
            })}
      
      <Footer />
        </div>
    );
}

export default App;