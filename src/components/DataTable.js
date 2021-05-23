import React, { Component } from "react";
import DataBody from "./DataBody.js";
import API from "../components/utils/API.js";
import SearchBox from "./SearchBox.js";
import "./styles/DataTable.css";

class DataTable extends Component {
    seed = "employeeDirectory";
    limit = 50;

    state = {
        search: "",
        users: []
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

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Image</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            // return <div>{user.name.first} {user.name.last}</div>

                            return <DataBody user={user} />

                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DataTable;