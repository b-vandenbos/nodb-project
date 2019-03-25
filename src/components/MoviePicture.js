import React, {Component} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';


library.add(faChevronRight);
library.add(faChevronLeft);


class MoviePicture extends Component {

    render() {
        let {movie, next, previous} = this.props;
        return (
        <div className="movie-picture w3-display-container">
            <button className="w3-button w3-display-left movie-picture-button" onClick={previous}><FontAwesomeIcon icon="chevron-left" /></button>
            <img className="movie-picture-image" src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt=""/>
            <button className="w3-button w3-display-right movie-picture-button" onClick={next}><FontAwesomeIcon icon="chevron-right" /></button>
        </div>
        )
    }
}

export default MoviePicture;