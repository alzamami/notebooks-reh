import { makeAutoObservable } from "mobx";
import axios from "axios";

class NoteStore {
  notes = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notes");
      this.notes = response.data;
      this.loading = false;
      console.log("fetching:", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  createNotes = async (newNote, notebook) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/notebooks/${notebook.id}/notes`,
        newNote
      );
      this.notes.push(response.data);
      notebook.notes.push({ id: response.data.id });
    } catch (error) {
      console.error(error);
    }
  };

  getNoteById = (noteId) => this.notes.find((note) => note.id === noteId);
}
const noteStore = new NoteStore();
noteStore.fetchNotes();
export default noteStore;
