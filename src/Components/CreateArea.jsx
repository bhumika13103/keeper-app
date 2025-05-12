import React, {use, useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
import "./../../public/styles.css";


function CreateArea(props) {
    const [isExpanded,setExpanded] = useState(false);

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
        setNoteContent({
            title : "",
            content: ""
        })
        event.preventDefault();
    }
    function expand(){
        setExpanded(true);
    }
  return (
    <div className="create-note">
      <form>
        {isExpanded && (<input onChange={handleChange} name="title" placeholder="Title" value = {noteContent.title} />)}
        <textarea onChange={handleChange} onClick={expand} name="content" placeholder="Take a note..." value={noteContent.content} rows={isExpanded?3:1} />
        <Zoom in={isExpanded}><Fab onClick={handleClick}><AddIcon htmlColor="#fff" /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;