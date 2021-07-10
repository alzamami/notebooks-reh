import NotesItem from "./NotesItem";
import { useState } from "react";

import { observer } from "mobx-react";
import noteStore from "../stores/noteStore";
import { SearchBar, Sheet, SheetWrap } from "../styles"
const NotesList = ({ notes, notebook }) => {
  const [note, setNote] = useState({ name: "", description: "" });

  const [query, setQuery] = useState("");


  const noteList = notes
    ?.filter((note) => note.name.toLowerCase().includes(query.toLowerCase()))
    .map((note) => <NotesItem note={note} />);

  const handleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    noteStore.createNotes(note, notebook);
    event.target.reset();
    setNote({ name: "", description: "" });

  };

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className="input-group mb-3 p-3">
          <input name="name"  className="form-control" type="text"  onChange={handleChange} placeholder="Type Your Title"/>
          <textarea className="form-control w-50" onChange={handleChange} name="description" placeholder="Type Your Notes ..."/>
          <button className="btn btn-secondary" type="submit">Add</button>
        </div>
      </form>
      <div>
        <SearchBar placeholder="Find Your Notes ..." onChange={(e) => setQuery(e.target.value)} />
      </div>
      <SheetWrap>
        <Sheet>
          {noteList}
        </Sheet>
      </SheetWrap>
    </div>
  );
};
export default observer(NotesList);
