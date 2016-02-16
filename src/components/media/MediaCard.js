import React from 'react';

const MediaCard = () => {
	return (
		<div className="card">
		  <figure className="card-image is-4x3">
		    <img src="http://placehold.it/300x225" alt="" />
		  </figure>
		  <div className="card-content">
		    <div className="media">
		      <div className="media-left">
		        <figure className="image is-32x32">
		          <img src="http://placehold.it/64x64" alt="Image" />
		        </figure>
		      </div>
		      <div className="media-content">
		        <p className="title is-5">John Smith</p>
		        <p className="subtitle is-6">@johnsmith</p>
		      </div>
		    </div>

		    <div className="content">
		      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		      Phasellus nec iaculis mauris. <a href="#">@bulmaio</a>.
		      <a href="#">#css</a> <a href="#">#responsive</a>
		      <br />
		      <small>11:09 PM - 1 Jan 2016</small>
		    </div>
		  </div>
		</div>
	);
}

export default MediaCard;
