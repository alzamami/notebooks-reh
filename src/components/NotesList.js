import NotesItem from "./NotesItem";
import { useState } from "react";

import { observer } from "mobx-react";
import noteStore from "../stores/noteStore";

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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="name" />
        <textarea onChange={handleChange} name="description" />
        <button type="submit"> add </button>
      </form>
      <div>
        <input onChange={(e) => setQuery(e.target.value)} />
      </div>
      {noteList}
    </div>
  );
};
export default observer(NotesList);
