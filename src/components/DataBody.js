import React from "react";
// import "./styles/DataBody.css"

function DataBody({user}) {
    // let user = props.user;
    // image, firstname, lastname, email, DOB {props.user.image}, {props.user.firstname}, {props.user.lastname}, {props.user.email}, {props.user.DOB}
    return (
        <tr>
        <th scope="row">{user.id}</th>
        <td><img src={user.thumbnail} alt={user.firstname}/></td>
        <td>{user.firstname}</td>
        <td>{user.lastname}</td>
        <td>{user.email}</td>
        <td>{user.age}</td>
      </tr>
    )
}

export default DataBody;
