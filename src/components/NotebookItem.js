import {observer} from "mobx-react"
const NotebookItem = ({notebook}) => {
    return (
        <h1>{notebook.name}</h1>
    )
}
export default observer(NotebookItem);