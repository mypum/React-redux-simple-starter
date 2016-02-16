import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {
	return (
		<div>
			<header className="header">
			  <div className="container">

			    <div className="header-left">
			      <a className="header-item" href="#">
			        LOGO
			      </a>
			      <a className="header-tab is-active" href="#">
			        Home
			      </a>
			      <a className="header-tab" href="#">
			        Notifications
			      </a>
			      <a className="header-tab" href="#">
			        Messages
			      </a>
			    </div>

			    <div className="header-right header-menu">

			      <span className="header-item">
			        <a className="button is-success">Tweet</a>
			      </span>
			    </div>
			  </div>

			</header>
		</div>

	);
}

export default Header;
