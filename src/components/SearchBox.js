import React from "react";
//import style folder
import "./styles/SearchBox.css";

function SearchBox({handleSearchChange}) {
    return (
        <div className="searchbox">
            <form className="form-inline">
                <input className="form-control"
                type = "search"
                placeholder = "Input here!"
                aria-label = "search"
                onChange = {e => handleSearchChange(e)}
                >
                </input>
            </form>
            <form className="search">
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
export default SearchBox;