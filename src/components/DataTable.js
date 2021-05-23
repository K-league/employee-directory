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
        results: []
    };
    // when this component mounts, search the RandomUser API for users from GB
    componentDidMount() {
        console.log("componentDidMount");
        this.getAllUsers();
    }

    getAllUsers = query => {
        console.log("getAllUsers hit");
        API.getUsers(this.seed, this.limit)
            .then(res => {
                this.setState({ results: res.data.results });
                console.log(this.state);
            })
            .catch(err => console.log("error on api:" + err));
    };

    handleSearchChange = event => {
        console.log("handleSearchChange hit");
        const value = event.target.value;
        const name = event.target.value;
        //from control SearchBox
        this.setState({
            [name]: value
        });
    };
    //when form is submitted, search API for `this.state.search`
    handleFormSubmit = event => {
        console.log("handleFormSubmit hit");
        event.preventDefault();
        this.searchRandomUser(this.state.search);
    };

    render() {
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
                        {this.state.results.map(user => {
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