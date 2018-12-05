import React, { Component } from "react";

export const ParticipantBox = ({
    name = "default",
    start = "N/A",
    end = "N/A",
    miles = 0
}) => (
    <div>
        <div>{name}</div>
        <div>{start}</div>
        <div>{end}</div>
        <div>{miles}</div>
    </div>
);

export default ParticipantBox;
