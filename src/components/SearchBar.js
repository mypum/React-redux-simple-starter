import React from 'react';


const SearchBar = () => {
	return (
		<div>
			<p className="control is-grouped">
				<input className="input" type="text" placeholder="Find a repository" />
				<a className="button is-info">Search</a>
			</p>
		</div>
	)
}

export default SearchBar;
