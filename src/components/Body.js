import React, { Component } from "react";
import API from "../utils/API";
import Table from "./Table";
import Search from "./Search";
export default class Body extends Component {
  state = {
    users: [],
    filteredUsers: [],
  };
  
  componentDidMount() {
    API.getUsers().then((res) => {
      console.log(res.data);
      this.setState({
        users: res.data.results,
        filteredUsers: res.data.results,
      });
    });
  }
  render() {
    return (
      <div className="container">
        <Search filterResults={this.filterResults} />
        <Table users={this.state.filteredUsers} />
      </div>
    );
  }
}