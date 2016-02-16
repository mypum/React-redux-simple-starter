import React from 'react';
import MediaItem from './media/MediaItem';

const HomeLatestArticles = () => {

	const articles = [
		{
			id: 1,
			title: 'Lorem ipsum dolor sit amet, consectetur.'
		}, {
			id: 2,
			title: 'Lorem ipsum dolor sit amet.'
		}, {
			id: 3,
			title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
		},
		{
			id: 4,
			title: 'Lorem ipsum dolor sit amet, consectetur.'
		}, {
			id: 5,
			title: 'Lorem ipsum dolor sit amet.'
		}, {
			id: 6,
			title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
		}
	];

	return (
		<div>
			{articles.map(function(article, index){
				return (
					<MediaItem key={article.id} title={article.title} />
				);
			})}
		</div>
	);
}

export default HomeLatestArticles;
