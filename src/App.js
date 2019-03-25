import React, { Component } from 'react';
import './App.css';
import './components/styles.css'
import MovieSide from './components/MovieSide';
import PostSide from './components/PostSide';

class App extends Component {
  render() {
    return (
      <div className="container">
       <MovieSide />
       <PostSide />
      </div>
    );
  }
}

export default App;
