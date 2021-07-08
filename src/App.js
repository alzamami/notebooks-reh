import './App.css';
import NotebookList from './components/NotebookList';
import NotebookDetail from './components/NotebookDetail';
import { Route, Switch } from "react-router";

function App() {
  return (
    <Switch>
      <Route path="/notebooks/:notebookSlug">
        <NotebookDetail />
      </Route>
      <Route path="/notebooks">
        <NotebookList />
      </Route>
    </Switch>
  );
}

export default App;
