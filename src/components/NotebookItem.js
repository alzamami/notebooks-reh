import { observer } from "mobx-react"
import { Link } from "react-router-dom"
const NotebookItem = ({ notebook }) => {
    return (
        <Link to={`/notebooks/${notebook.slug}`}>
            {notebook.name}
        </Link>
    )
}
export default observer(NotebookItem);