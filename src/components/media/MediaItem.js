import React, { Component } from 'react';

class MediaItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="media-object">
                <div className="media-object-section">
                <h4>{this.props.title}</h4>
                <p>I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
                </div>
            </div>

        );
    }
}

export default MediaItem;
