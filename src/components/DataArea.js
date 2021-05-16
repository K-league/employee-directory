import React from "react";
//styles

function DataArea(props) {
    return (
        <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>
    )
}
export default DataArea;