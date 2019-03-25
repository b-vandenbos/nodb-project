import React, {Component} from 'react';
import axios from 'axios';
import PostRead from './PostRead';
import PostCreate from './PostCreate';

class PostSide extends Component {
    constructor() {
        super();
    
        this.state = {
            posts: [],
            input: ''
        };
    
        this.createPost = this.createPost.bind(this);
        this.updatePost = this.updatePost.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }
    
    createPost(post) {
        axios.post(`/api/posts`, post)
        .then(results => {this.setState({posts: results.data})})
        .catch(err => {console.log('there was an error in creating the post', err)});
    }
    
    updatePost(post) {
        axios.put(`/api/posts/${post.id}`, post)
        .then(results => this.setState({posts: results.data}))
        .catch(err => console.log('there was an error in updating the post', err));
    }
    
    deletePost(id) {
        axios.delete(`/api/posts/${id}`)
        .then(results => {this.setState({posts: results.data})})
        .catch(err => {console.log('there was an error in deleting the post', err)});
    }
    
    watchInput(val) {
        this.setState({input: val});
    }
    
    componentDidMount() {
        axios.get('/api/posts')
        .then(results => {this.setState({posts: results.data})})
        .catch(err => console.log('error in loading posts:', err));    
      }    

    render() {
        
        return (
            <div className="post-side">
                <PostRead posts={this.state.posts} deletePost={this.deletePost} updatePost={this.updatePost}/>
                <PostCreate createPost={this.createPost} />
            </div>
        )
    }
}

export default PostSide;