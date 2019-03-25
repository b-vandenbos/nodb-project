import React, {Component} from 'react';

class MovieInfo extends Component {

    render() {
        let {movie} = this.props;
        return (
        
            <div className="movie-info">
                <div className="movie-info-left">
                    <h1>{movie.title}</h1>
                </div>
                <div className="movie-info-right">
                    <p className="movie-info-right-text">{movie.overview}</p>
                    <p className="movie-info-right-genre">{movie.genre_ids}</p>
                </div>
            </div>
        
        )
    }
}

export default MovieInfo;