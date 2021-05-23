import React, { Component } from "react";
import "./styles/Header.css";
//import style

class Header extends Component{
    render(){
        return (
            <header className="header">
            <h1>Employee Directory</h1>
            <p>View and filter all your employees in one place</p>
            </header>
        );
    }
};
export default Header;