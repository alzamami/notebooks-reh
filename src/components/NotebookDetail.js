import { useParams } from "react-router";
import { observe } from "mobx-react";
import notebookStore from "../stores/notebookStore";
const NotebookDetail = () => {
    const { notebookSlug } = useParams();
    const notebook = notebookStore.notebook.find((notebook) => notebook.slug === notebookSlug);
    const notes = notebook.notes.map((note))
    return (

    )
}
export default observe(NotebookDetail);