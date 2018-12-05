import React, { Component } from "react";

export const SearchButton = ({ onClick, children }) => (
    <div className="search-btn-container">
        <button className="search-btn" onClick={onClick}>
            {children}
        </button>
    </div>
);

export default SearchButton;
