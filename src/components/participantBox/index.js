import React from "react";
export const ParticipantBox = ({
    name = "PARTICPANT ID",
    start = "10/12",
    end = "Present",
    miles = 100
}) => (
    <div className="part-box">
        <div className="part-name">{name}</div>
        <div className="part-start">Start Time: {start}</div>
        <div className="part-end">End Time:{end}</div>
        <div className="part-miles">Total Miles: {miles} mi</div>
    </div>
);

export default ParticipantBox;
