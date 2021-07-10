import NotesItem from "./NotesItem";
import { observer } from "mobx-react"

const NotesList = ({ notes, nteobook }) => {
    const noteList = notes.map((note) => <NotesItem note={note} />)
    return (
        <div>
            {noteList}
        </div>
    )
}
export default observer(NotesList);