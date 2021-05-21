import React, { Component } from "react";
import DataBody from "./DataBody.js";
import DataArea from "./DataArea.js";
import API from "../components/utils/API.js";
import SearchBox from "./SearchBox.js";
import "./styles/DataTable.css";

class DataTable extends Component {
    state = {
        search: "",
        results: []
    };
    // when this component mounts, search the RandomUser API for users from GB
    componentDidMount() {
        console.log("componentDidMount");
        this.searchRandomUser("GB");
    }

    searchRandomUser = query => {
        console.log("searchRandomUser hit");
        API.search(query)
        .then(res => this.setState({ results: res.data.data }))
        // .then(res => console.log(res))
        .catch(err => console.log(err));
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
                <DataBody resutls={this.state.results} />
            </div>
        );
    }
}

export default DataBody;