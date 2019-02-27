import React from "react";
import SearchBar from "../searchBar";
import ParticipantContainer from "../participantContainer";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="App">
          <SearchBar />
          <ParticipantContainer />
      </div>
    );
  }
}
