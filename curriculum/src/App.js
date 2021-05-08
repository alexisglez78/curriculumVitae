import {
  BrowserRouter,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom'
import './App.css';
import Estudios from "./components/Estudios";
import Inicio from "./components/Inicio";
import Lenguajes from "./components/Lenguajes";

import Navbar from "./components/Navbar";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Content() {
  const location = useLocation()

  return (
    <div className='' style={{ overflow: 'hidden' }}>
      <div >

        <TransitionGroup>
          <CSSTransition
            timeout={300}
            classNames='fade'
            key={location.key}
          >
            <Switch location={location}>
              <Route exact path="/">
                <Inicio />
              </Route>
              <Route exact path="/lenguajes">
                <Lenguajes />
              </Route>
              <Route exact path="/estudios">
                <Estudios />
              </Route>
              <Route path='*'>
                <div>Not Found</div>
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Content />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
