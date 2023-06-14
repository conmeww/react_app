import './App.css';
import logo from './logo.png';
import React from "react";
import Main from "./components/Main";
import {store} from "./redux/store";




function App() {

    return (
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

            </header>
          <Main/>
        </div>
    );
}
export default App;
