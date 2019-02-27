import React, { Component } from "react";
import ParticipantBox from "../participantBox";
import { Link } from "react-router-dom";
export default class ParticipantContainer extends Component {
    render() {
        return (
            <div className="part-container">
                <Link to="/map"><ParticipantBox /></Link>
                <Link to="/map"><ParticipantBox /></Link>
            </div>
        );
    }
}
