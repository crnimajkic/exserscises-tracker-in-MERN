import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/Navbar";
import ExsercisesList from "./components/ExsercisesList";
import EditExsercise from "./components/EditExsercise"
import CreateExsercise from "./components/CreateExsercise"
import CreateUser from "./components/CreateUser"
import Copyright from "./components/Copyright";

function App() {
  return (
    <Router>
      <div className="container">
         <Navbar />
      <br />
      <Route path="/" exact component={ExsercisesList} />
      <Route path="/edit/:id" component={EditExsercise} />
      <Route path="/create" component={CreateExsercise} />
      <Route path="/users" component={CreateUser} />
      </div>
      <Copyright />
    </Router>
  );
}

export default App;
