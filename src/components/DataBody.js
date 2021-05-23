import React from "react";
// import "./styles/DataBody.css"

function DataBody(props) {
    let user = props.user;
    // image, firstname, lastname, email, DOB {props.user.image}, {props.user.firstname}, {props.user.lastname}, {props.user.email}, {props.user.DOB}
    return (
        <tr>
        <th scope="row">{user.id.value}</th>
        <td><img src={user.picture.thumbnail} alt={user.name.first}/></td>
        <td>{user.name.first}</td>
        <td>{user.name.last}</td>
        <td>{user.email}</td>
        <td>{user.dob.age}</td>
      </tr>
    )
}

export default DataBody;
