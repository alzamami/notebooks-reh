import { observer } from "mobx-react"
import { Link } from "react-router-dom"
import { BookCover, NotebookStyle, NotePage, NoteSkin, NoteLink } from "../styles";
const NotebookItem = ({ notebook }) => {
    return (
        <NotebookStyle>
            <NoteLink to={`/notebooks/${notebook.slug}`}>
                <BookCover className="notebook-cover">
                    <NoteSkin>
                        <p>{notebook.name}</p>
                    </NoteSkin>
                </BookCover>
            </NoteLink>
            <NotePage />
        </NotebookStyle>
    )
}
export default observer(NotebookItem);