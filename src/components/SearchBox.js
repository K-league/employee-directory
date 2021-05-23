import React from "react";
//import style folder
import "./styles/SearchBox.css";

function SearchBox({handleSearchChange}) {
    return (
        <div className="searchbox">
            <form className="form-inline">
                <input className="form-control"
                type = "search"
                placeholder = "Filter by name"
                aria-label = "search"
                onChange = {e => handleSearchChange(e)}
                >
                </input>
            </form>
        </div>
    )
}
export default SearchBox;