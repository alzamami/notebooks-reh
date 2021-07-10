import notebookStore from "../stores/notebookStore";
import NotebookItem from "./NotebookItem";
import { observer } from "mobx-react";
import { useState } from "react";
import { ImageBk, SearchBar } from "../styles";

const NotebookList = () => {
  const [notebook, setNotebook] = useState({ name: "" });
  const [query, setQuery] = useState("");

  const notebooks = notebookStore.notebook
    .filter((notebook) =>
      notebook.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((notebook) => <NotebookItem notebook={notebook} />);

  const handleChange = (event) => {
    setNotebook({ ...notebook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    notebookStore.createNotebook(notebook);
    
  };

  return (
    <ImageBk>
      <form className="input-group mb-3 p-5" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          name="name"
          placeholder="Type your Notebook ..."
        />
        <button className="btn btn-success" type="submit">
          ADD
        </button>
      </form>
      <div>
        <SearchBar placeholder="Search Your Notebook ..." onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div className="d-flex flex-wrap p-5">
        {notebooks}
      </div>
    </ImageBk>
  );
};
export default observer(NotebookList);
