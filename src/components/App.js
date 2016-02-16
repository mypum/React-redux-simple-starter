import React from 'react';

// COMPONENTS
import Header from './Header';
import HomeLatestArticles from './HomeLatestArticles';
import Footer from './Footer';
import SearchBox from './search/SearchBox';

const App = () => {
	return (
		<div className="container">
			<div className="row column">
				<Header />
			</div>
			<div className="row column">
				<SearchBox />
				<HomeLatestArticles />
				<Footer />
			</div>
		</div>
	);
}

export default App;
