import React, {Component} from 'react';

class PostCreate extends Component {
constructor() {
    super();

    this.state = {
        movie: '',
        text: '',
    }

    this.addReview = this.addReview.bind(this);

}

watchMovie(val) {
    this.setState({movie: val});
}

watchText(val) {
    this.setState({text: val});
}

addReview() {
    let {createPost} = this.props;
    let post = this.state;

    createPost(post);
    this.setState({text: ''});
    this.setState({movie: ''});

}

render() {
    return (
        <div className="post-create">
            <textarea className="post-create-text" value={this.state.text} type="text" name="text" onChange={e => this.watchText(e.target.value)} placeholder="What did you think of the movie?"/>
            <div className="post-create-info">
                <div className="post-create-info-left">
                    <span className="movie-title-label">Movie: </span><input className="movie-title-input" value={this.state.movie} type="text" name="movie" onChange={e => this.watchMovie(e.target.value)}/>
                </div>
                <button className="add-button" onClick={this.addReview}>Add Review</button>
            </div>
        </div>
    )
}

}

export default PostCreate;