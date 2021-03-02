import React, { Component } from 'react'
import fetchData from './api/Api.js'
import Card from './components/card/Card'
import Input from './components/input/Input'
import './App.css'
import Avatar from './components/avatar/Avatar.jsx'
import logo from './assets/github.png'
export default class App extends Component {

  state = {
    searchQuery: '',
    userList: []
  };

  getUserApi = async () => {
    const userList = await fetchData(this.state.searchQuery);
    this.setState({ userList: userList });
  }

  changeSearch = (searchQuery) => {
    this.setState({ searchQuery: searchQuery });
    if (searchQuery.length > 4) {
      setTimeout(() => {
        this.getUserApi();
      }, 500)
    }
  }

  render() {

    return (
      <>
        <header>
          <Avatar src={logo} width={300} style={{margin: 35}}/>
          <Input value={this.state.searchQuery} onChangeSearch={this.changeSearch} />
        </header>

        <div className="content">
          {this.state.userList && this.state.userList.map((user) => {
            return <Card key={user.id} {...user} />
          })}
        </div>
      </>
    )
  }
}
