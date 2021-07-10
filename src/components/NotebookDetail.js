import { useParams } from "react-router";
import { observer } from "mobx-react";
import notebookStore from "../stores/notebookStore";
import noteStore from "../stores/noteStore";
import NotesList from "./NotesList";
const NotebookDetail = () => {
  const { notebookSlug } = useParams();
  const notebook = notebookStore.notebook.find(
    (notebook) => notebook.slug === notebookSlug
  );
  const notes = notebook.notes?.map((note) => noteStore.getNoteById(note.id));
  return (
    <div>
      <h1>{notebook.name}</h1>

      <NotesList notes={notes} notebook={notebook} />
    </div>
  );
};
export default observer(NotebookDetail);
