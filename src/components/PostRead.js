import React, {Component} from 'react';
import Post from './Post';

class PostRead extends Component {
    constructor() {
        super();
    
        this.state = {
            input: ''
        };
    }
    
    watchInput(val) {
        this.setState({input: val});
    }

    render() {
        let {deletePost, updatePost} = this.props;
        
        return (
        <div className="post-read">
            <div className="post-read-searchbar">
                <span className="post-read-searchbar-label">Search for a movie: </span>
                <input className="post-read-searchbar-input" onChange={e => this.watchInput(e.target.value)}/>
            </div>
            <div className="post-read-field">
                { 
                    this.props.posts.map( (post, index) => {
                        let {input} = this.state;
                        let title = post.movie.toLowerCase();
                        if (title.includes(input.toLowerCase())) {
                            return (<Post key={index} post={post} id={post.id} deletePost={deletePost} updatePost={updatePost}/>) 
                        }
                    })
                }
            </div>
        </div>
        )
    }
}

export default PostRead;