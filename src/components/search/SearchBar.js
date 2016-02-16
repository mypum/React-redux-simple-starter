import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.getResult(event.target.value);
    }

    render() {
        return (
            <div className="input-group">
                <input  onChange={this.handleChange} className="input-group-field" type="text" />
                <div className="input-group-button">
                    <input type="submit" className="button" value="Submit" />
                </div>
            </div>
        );
    }
}

export default SearchBar;
