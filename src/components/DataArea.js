import React from "react";
//styles
// import "./styles/DataArea.css";

function DataArea(props) {
    return (
        <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>
    )
}
export default DataArea;