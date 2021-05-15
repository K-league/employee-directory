import React from "react";
//import style folder

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
        </div>
    )
}
export default SearchBox;