import React from "react";
import "./App.css";
import Temperature from "./Temperature";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Temperature defaultCity="Bengaluru" />
            </div>
        </div>
    );
}

export default App;
