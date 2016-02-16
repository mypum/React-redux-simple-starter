import React, { Component } from 'react';
import SearchBar from './SearchBar';

class SearchBox extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchResult: 'Keyword display here',
		};

		this.getResult = this.getResult.bind(this);
	}

	getResult(result) {
		this.setState({
			'searchResult': result
		});
	}

  render() {
    return (
		<div>
			<SearchBar getResult={this.getResult} />
			<div>{this.state.searchResult}</div>
		</div>
    );
  }
}

export default SearchBox;
