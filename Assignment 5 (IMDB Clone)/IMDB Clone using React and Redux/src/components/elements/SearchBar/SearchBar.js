import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    value: ''
  }
  timeout = null;

  doSearch = (event) => {
    const value = event.target.value;
    this.setState({ value })
    clearTimeout(this.timeout);
    this.timeout = setTimeout( () => {
      this.props.callback(value);
    }, 500);
  }

  render () {
    const { value } = this.state;

    return (
      <div className="searchbar">
        <div className="searchbar-content">
          <FontAwesome className="fa-search" name="search" size="2x" />
          <input
            type="text"
            className="searchbar-input"
            placeholder="Search"
            onChange={this.doSearch}
            value={value}
          />
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  callback: PropTypes.func
}

export default SearchBar;