import React, {useState} from "react";

function CreateArea(props) {
    const [noteContent, setNoteContent]= useState({
        title : "",
        content : ""
    })
    function handleChange(event){
        const {name,value} = event.target;
        setNoteContent ((prev) => {
            return ({
                ...prev,
                [name]:value,
            })
        });
    }
    function handleClick(event){
        props.sendData(noteContent);
        event.preventDefault();
    }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value = {noteContent.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={noteContent.content}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;