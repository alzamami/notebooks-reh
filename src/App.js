import './App.css';
import NotebookList from './components/NotebookList';
import NotebookDetail from './components/NotebookDetail';
import { Route, Switch } from "react-router";
import NotesList from './components/NotesList';
import { observer } from "mobx-react";
import noteStore from './stores/noteStore';
import notebookStore from './stores/notebookStore';

function App() {
  return (
    <div>{
      notebookStore.loading || noteStore.loading ? <h1>loading</h1> :
      <Switch>
        <Route path="/notes">
          <NotesList notes={noteStore.notes} />
        </Route>
        <Route path="/notebooks/:notebookSlug">
          <NotebookDetail />
        </Route>
        <Route path="/notebooks">
          <NotebookList />
        </Route>
      </Switch>}
    </div>
  );
}

export default observer(App);
