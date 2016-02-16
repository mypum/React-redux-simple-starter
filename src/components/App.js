import React from 'react';

// COMPONENTS
import Header from './Header';
import HomeLatestArticles from './HomeLatestArticles';
import MediaCard from './media/MediaCard';
import HeroHeader from './HeroHeader.js';
import Footer from './Footer';

const App = () => {
	return (
		<div>
			<Header />
			<HeroHeader />
			<section className="section">
				<div className="container">
			    	<div className="columns">
						<div className="column is-third">
							<MediaCard />
						</div>
						<div className="column">
							<HomeLatestArticles />
						</div>
			    	</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default App;
