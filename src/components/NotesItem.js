import { observer } from "mobx-react";

const NotesItem = (props) => {
  const note = props.note.name;
  const description = props.note.description;
  return (
    <div>
      <h3>{note}</h3>
      <p>{description}</p>
    </div>
  );
};
export default observer(NotesItem);
