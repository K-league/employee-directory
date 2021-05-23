import React, { Component } from "react";
import Nav from "./Nav.js";
import DataTable from "./DataTable";
import API from "./utils/API";
//styles
// import "./styles/DataArea.css";
// function DataArea(props) {
//     return (
//         <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>
//     )
// }
export default class DataArea extends Component {
    state = {
        users: [{}],
        order: "descend",
        filterUsers: [{}]

    }
    headings = [
        { name: "image", width: "10%" },
        { name: "name", width: "10%" },
        { name: "phone", width: "20%" },
        { name: "email", width: "20%" },
        { name: "DOB", width: "10%" }
    ]
    handleSort = heading => {
        if (this.state.order === "descend") {
            this.setState({
                order: "ascend",
            })
        } else {
            this.setState({
                order: "descend",
            })
        }

        const compareFunct = (a, b) => {
            if (this.state.order === "ascend") {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                } else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first)
                } else {
                    return a[heading] - b[heading]
                }
            } else {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                } else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first)
                } else {
                    return b[heading] - a[heading]
                }
            }
        
        }
        const sortUsers = this.state.filterUsers.sort(compareFunct)
        this.setState({ filterUsers: sortUsers })
    }

    componentDidMount() {
        console.log("componentDidMount");
        // this.searchRandomUser("GB");
    }
    
    handleSearchChange = event => {
        console.log("handleSearchChange hit");
        const value = event.target.value;
        const name = event.target.value;
        //from control SearchBox
        this.setState({
            [name]: value
        });
    };
    
    render() {
        return (
            <>
            <Nav/>
            <div> <DataTable/></div>
            </>
        )
    }


} 
//check curlies
//funct to handle search changes
