import React, { Component } from "react";
import "./scss/App.scss";
import "react-datepicker/dist/react-datepicker.css";
import AppRouter from "./components/router";
class App extends Component {
    render() {
        return (
            <AppRouter/>
        );
    }
}

export default App;
