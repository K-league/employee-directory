import React from "react";
import SearchBox from "./SearchBox.js";
//import searchbox and styles.nav

//function
function Nav({handleSearchChange}) {
    return (
        <nav className= "navbar navbar-expand navbar-light bg-light" >
            <div>
                <SearchBox handleSearchChange={handleSearchChange}/>
            </div>

        </nav>
    )
}
export default Nav;