import React, { Component } from "react";
import DataBody from "./DataBody.js";
import DataArea from "./DataArea.js";
import API from "../components/utils/API.js";
import SearchBox from "./SearchBox.js";

class DataTable extends Component {
    state = {
        search: "",
        results: []
    };
    // when this component mounts, search the RandomUser API for users from GB
    componentDidMount() {
        this.searchRandomUser("GB");
    }

    searchRandomUser = query => {
        API.search(query)
        .then(res => this.setState({ results: res.data.data }))
        .catch(err => console.log(err));
    };

    handleSearchChange = event => {
        //from control SearchBox??
    }
    //when form is submitted, search API for `this.state.search`
    handleFormSubmit = event => {
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