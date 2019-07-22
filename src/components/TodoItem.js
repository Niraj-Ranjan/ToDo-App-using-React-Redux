import React, { Component } from 'react'

import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';

class TodoItem extends Component {
    componentWillMount(){
        this.props.fetchPosts();
        console.log(this.props);
    }
    render() {
        const {title, handleDelete, handleEdit} = this.props;
        return (
            <div className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={handleEdit}>
                        <i className="fa fas fa-edit"></i>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fa fas fa-trash"></i>
                    </span>
                </div>
            </div>
        )
    }
}

export default connect(null, {fetchPosts}) (TodoItem);