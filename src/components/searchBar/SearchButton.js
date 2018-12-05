import React, { Component } from "react";

export const SearchButton = ({ onClick, children }) => (
    <div>
        <button onClick={onClick}>{children}</button>
    </div>
);

export default SearchButton;
