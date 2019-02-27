import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar";
import ParticipantContainer from "../participantContainer";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="App">
          <Link to="/">
            <a>Signout</a>
          </Link>
          <SearchBar />
          <ParticipantContainer />
      </div>
    );
  }
}
