import { BrowserRouter, Route } from "react-router-dom"
import './App.css';
import Estudios from "./components/Estudios";
import Inicio from "./components/Inicio";
import Lenguajes from "./components/Lenguajes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <BrowserRouter >
      <Navbar/>
      <Route exact path="/">
        <Inicio />
      </Route>
      <Route path="/lenguajes">
        <Lenguajes/>
      </Route>
      <Route path="/estudios">
        <Estudios/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
