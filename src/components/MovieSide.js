import React, {Component} from 'react';
import axios from 'axios';
import './styles.css';
import MoviePicture from './MoviePicture';
import MovieInfo from './MovieInfo';

class MovieSide extends Component {
    constructor() {
        super();
    
        this.state = {
            list: [],
            slide: 0
        };
    
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    
    slide() {
        let {slide, list} = this.state;
        if (slide !== list.length - 1) {
            this.setState({slide: slide + 1});
        }
        else if (slide === list.length -1) {
            this.setState({slide: 0});
        }
    }
    
    next() {
        this.slide();
    }
    
    previous() {
        let {slide, list} = this.state
        if (slide !== 0) {this.setState({slide: slide - 1});}
        else if (slide === 0) {
            this.setState({slide: list.length - 1});
        }
    }
    
    componentDidMount() {
        axios.get('/api/movies')
        .then(results => this.setState({list: results.data}))
        .catch(err => console.log('error in loading movies: ', err));
    
        this.interval = setInterval( () => this.slide(), 3000);
      }

    render() {
        let {list, slide} = this.state;

        return (
            <div className="movie-side">
            {
                list.map( (movie, index) => {
                    if (index === slide) {
                        return (
                            <MoviePicture key={index} movie={movie} next={this.next} previous={this.previous}/>                                
                        )
                    }
                })
            }
            {
                list.map( (movie, index) => {
                    if (index === slide) {
                        return (
                            <MovieInfo key={index} movie={movie} />
                        )
                    }
                })
            }
            </div>
        )
    }
}

export default MovieSide;