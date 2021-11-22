import React from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import './App.css';
import Login from "./Login";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <Route>
            <Login/>
          </Route>
        </section>
      </header>
    </div>
  );
}

export default App;
