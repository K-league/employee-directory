import React, { Component } from "react";
import DataBody from "./DataBody.js";
import API from "../components/utils/API.js";
import SearchBox from "./SearchBox.js";
import SortingArrow from "./SortingArrow.js";
import "./styles/DataTable.css";

class DataTable extends Component {
    seed = "employeeDirectory";
    limit = 50;

    state = {
        search: "",
        users: [], 
        order: "ascend",
        heading: null
    };
    // when this component mounts, search the RandomUser API for users from GB
    componentDidMount() {
        console.log("componentDidMount");
        this.getAllUsers();
    }

    getAllUsers() {
        console.log("getAllUsers hit");
        API.getUsers(this.seed, this.limit)
            .then(res => {
                //this.setState({ results: res.data.results });
                let users = res.data.results.map(user => {
                    return {
                        id: user.id.value,
                        thumbnail: user.picture.thumbnail,
                        firstname: user.name.first,
                        lastname: user.name.last,
                        email: user.email,
                        age: user.dob.age
                    }
                });
                this.setState({users});
            })
            .catch(err => console.log("error on api:" + err));
    };
    
    handleSort = (heading) => {
        if (this.state.order === "descend") {
            this.setState({
                order: "ascend",
                heading: heading
            })
        } else {
            this.setState({
                order: "descend",
                heading: heading
            })
        }

        const compareFunct = (a, b) => {
            if (this.state.order === "ascend") {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                } else if (heading === "lastname" || heading === "firstname" || heading === "email") {
                    return a[heading].localeCompare(b[heading])
                } else {
                    return a[heading] - b[heading]
                }
            } else {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                } else if (heading === "lastname" || heading === "firstname" || heading === "email") {
                    return b[heading].localeCompare(a[heading])
                } else {
                    return b[heading] - a[heading]
                }
            }
        
        }
        const sortUsers = this.state.users.sort(compareFunct)
        this.setState({ users: sortUsers })
    }

    handleSearchChange = event => {
        this.setState({filter: event.target.value});
    };

    getDisplayUsers() {
        if (!this.state.filter) {
            return this.state.users;
        } else {
            let filter = this.state.filter.toLowerCase();
            return this.state.users.filter(user => user.firstname.toLowerCase().includes(filter) || user.lastname.toLowerCase().includes(filter))
        }
        
    }

    render() {
        let users = this.getDisplayUsers();
        return (
            <div>
                <SearchBox
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleSearchChange={this.handleSearchChange}
                />

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Image</th>
                            <th scope="col" onClick={e => this.handleSort("firstname")}>
                                First
                                <SortingArrow headingMatches={this.state.heading === "firstname"} order={this.state.order} />
                            </th>
                            <th scope="col" onClick={e => this.handleSort("lastname")}>
                                Last
                                <SortingArrow headingMatches={this.state.heading === "lastname"} order={this.state.order} />
                            </th>
                            <th scope="col" onClick={e => this.handleSort("email")}>
                                Email
                                <SortingArrow headingMatches={this.state.heading === "email"} order={this.state.order} />
                            </th>
                            <th scope="col" onClick={e => this.handleSort("age")}>
                                Age
                                <SortingArrow headingMatches={this.state.heading === "age"} order={this.state.order} />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, key) => {
                            // return <div>{user.name.first} {user.name.last}</div>

                            return <DataBody user={user} key={key} />

                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DataTable;