import { Route, Link, Switch, Redirect } from "react-router-dom";
import AllNotes from "./pages/AllNotes";
import NewNote from "./pages/NewNote";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import { Fragment } from "react";
import NoteDetail from "./pages/NoteDetail";

function App() {
  return (
    <Fragment>
      <Nav
        activeKey="/all"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className="justify-content-center"
        variant="tabs"
        fill
      >
        <Nav.Item>
          <Link to="/all" className="nav-link">
            Todas as Notas
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/new" className="nav-link">
            Nova Nota
          </Link>
        </Nav.Item>
      </Nav>
      <Switch>
        <Route exact path="/">
          <Redirect to="/all" />
        </Route>
        <Route path="/all">
          <AllNotes />
        </Route>
        <Route path="/new">
          <NewNote />
        </Route>
        <Route path="/detail/:id">
          <NoteDetail />
        </Route>
        <Route path="*">404: Page not Found.</Route>
      </Switch>
    </Fragment>
  );
}

export default App;
