import React, { Component } from "react";
import SearchBox from "./SearchBox";
import SearchButton from "./SearchButton";

export default class SearchBar extends Component {
    render() {
        return (
            <div className="search-container">
                <SearchBox />
                <SearchButton>Submit</SearchButton>
            </div>
        );
    }
}
