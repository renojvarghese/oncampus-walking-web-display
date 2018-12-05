import React, { Component } from "react";
import "./scss/App.scss";
import SearchBar from "./components/searchBar";
import ParticipantContainer from "./components/participantContainer";
class App extends Component {
    render() {
        return (
            <div className="App">
                Hello World!
                <SearchBar />
                <ParticipantContainer />
            </div>
        );
    }
}

export default App;
