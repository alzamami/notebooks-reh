import { useParams } from "react-router";
import { observer } from "mobx-react";
import notebookStore from "../stores/notebookStore";
import noteStore from "../stores/noteStore";
import NotesList from "./NotesList";
import { SheetImageBk } from "../styles";
const NotebookDetail = () => {
  const { notebookSlug } = useParams();
  const notebook = notebookStore.notebook.find(
    (notebook) => notebook.slug === notebookSlug
  );
  const notes = notebook.notes?.map((note) => noteStore.getNoteById(note.id));
  return (
    <SheetImageBk>
      <h1 className="text-center p-3">{notebook.name}</h1>
      <NotesList notes={notes} notebook={notebook} />
    </SheetImageBk>
  );
};
export default observer(NotebookDetail);
