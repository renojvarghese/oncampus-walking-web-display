import React, { Component } from "react";
import "./scss/App.scss";
import SearchBar from "./components/searchBar";
class App extends Component {
    render() {
        return (
            <div className="App">
                Hello World!
                <SearchBar />
            </div>
        );
    }
}

export default App;
