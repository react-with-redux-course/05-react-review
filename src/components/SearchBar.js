import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="ui form">
                        <label>
                            Video Search
                        </label>
                        <input type="text" />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;