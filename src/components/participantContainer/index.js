import React, { Component } from "react";
import ParticipantBox from "../participantBox";

export default class ParticipantContainer extends Component {
    render() {
        return (
            <div className="part-container">
                <ParticipantBox />
                <ParticipantBox />
            </div>
        );
    }
}
