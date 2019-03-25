import React, {Component} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faUndo} from '@fortawesome/free-solid-svg-icons';

library.add(faPencilAlt);
library.add(faCheckSquare);
library.add(faTimes);
library.add(faUndo);


class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.post.id,
            movie: props.post.movie,
            text: props.post.text,
            timestamp: props.post.timestamp,
            edit: false
        }

        this.updatePost = this.updatePost.bind(this);
        this.showEdit = this.showEdit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    showEdit() {
        this.setState({edit: true});
    }

    updatePost() {
        let {updatePost} = this.props;
        updatePost(this.state);
        this.setState({edit: false});
    }

    cancelEdit() {
        this.setState({edit: false});
    }

    watchText(val) {
        this.setState({text: val});
    }

    render() {
        let {post, id, deletePost} = this.props;

        return this.state.edit ? (
            <div className="post">
                <div className="post-info-row">
                    <div className="post-info-label">
                        <p className="date-field">{post.timestamp}</p>
                        <p className="title-field">{post.movie}</p>
                    </div>
                    <button className="edit-button" onClick={this.updatePost}><FontAwesomeIcon icon="check-square" /></button>
                    <button className="edit-button" onClick={this.cancelEdit}><FontAwesomeIcon icon="undo" /></button>
                </div>
                <textarea className="post-text-row" placeholder={post.text} onChange={ e => this.watchText(e.target.value)}/>
            </div>  
            ) : (
            <div className="post">
                <div className="post-info-row">
                    <div className="post-info-label">
                        <p className="date-field">{post.timestamp}</p>
                        <p className="title-field">{post.movie}</p>
                    </div>
                    <button className="edit-button" onClick={this.showEdit}><FontAwesomeIcon icon="pencil-alt" /></button>
                    <button className="edit-button" onClick={() => deletePost(id)}><FontAwesomeIcon icon="times" /></button>
                </div>
                <p className="post-text-row">{post.text}</p>
            </div>
        )
    }
}

export default Post;