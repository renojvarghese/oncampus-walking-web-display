import React, { Component } from "react";

export const SearchBox = ({ onChange, placeholder }) => (
    <div>
        <input onChange={onChange} placeholder={placeholder} />
    </div>
);

export default SearchBox;
