import React from "react";
//css for wrapper in style folder
import "./styles/Wrapper.css";

function Wrapper({children}) {
    return(
        <div className="wrapper">
            {children}

        </div>
    )
}
export default Wrapper;