import React, { Component } from "react";

export const SearchBox = ({ onChange, placeholder = "Search" }) => (
    <div className="search-box">
        <input
            className="search-input"
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>
);

export default SearchBox;
