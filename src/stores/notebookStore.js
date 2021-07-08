import axios from "axios";
import { makeAutoObservable } from "mobx";

class NotebookStore {
    notebook = [];
    constructor() {
        makeAutoObservable(this)
    }
    featchNotebook = async () => {
        try {
            const response = await axios.get("http://localhost:8000/notebooks");
            this.notebook = response.data;
        } catch (error) {
            console.error(error)
        }
    }
    createNotebook = async (newNotebook) => {
        try {
            const response = await axios.post("http://localhost:8000/notebooks", newNotebook);
            this.notebook.push(response.data)
        } catch (error) {
            console.error(error)
        }
    }
}
const notebookStore = new NotebookStore();
notebookStore.featchNotebook();
export default notebookStore;