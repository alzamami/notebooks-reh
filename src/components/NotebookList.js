import notebookStore from "../stores/notebookStore";
import NotebookItem from "./NotebookItem";
import { observer } from "mobx-react";
import { useState } from "react";

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
    <div>
      <form class="input-group mb-3" onSubmit={handleSubmit}>
        <input
          type="text"
          class="form-control"
          onChange={handleChange}
          name="name"
        />
        <button class="btn btn-outline-secondary" type="submit">
          Button
        </button>
      </form>
      <div>
        <input onChange={(e) => setQuery(e.target.value)} />
      </div>

      {notebooks}
    </div>
  );
};
export default observer(NotebookList);
