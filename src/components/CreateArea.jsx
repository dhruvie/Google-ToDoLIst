import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [iszoom,setZoom]=useState(false);
  function ZoomIn()
  {
    setZoom(true);
  }
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setZoom(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
      { iszoom ? 
      <Zoom in={(iszoom)?true:false} >
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /></Zoom>
        : null}
        <textarea
          name="content" onClick={ZoomIn}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={iszoom?"3":"1"}
        />
        <Zoom in={iszoom}>
        <Fab onClick={submitNote} aria-label="add"><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
