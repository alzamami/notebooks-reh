import { observer } from "mobx-react"

const NotesItem = (props) => {
    return (
        <p>{props.note.name}</p>
    )
}
export default observer(NotesItem);