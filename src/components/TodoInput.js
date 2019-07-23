import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { connect } from 'react-redux';
import {createPost,updatePost} from '../actions/postActions';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          body: ''
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const post = {
          title: this.state.title
        };    
        this.props.createPost(post);
      }
    render() {  
      const {title} = 'aadas';     
        return (
          
            <div className="card card-body my-3">
                <form onSubmit={this.onSubmit}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-primary text-white">
                                <i className="fa fas fa-book"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Enter Your Work" aria-label="Username" aria-describedby="basic-addon1"
                            name="title"
                            onChange={this.onChange}
                            value={this.state.title}>
                        </input>
                    </div>
                    <button type="submit" className= "btn btn-block btn-primary mt-3"
                    > 
                    Add Task
                       </button>
                </form>
            </div>
        )
    }
}

TodoInput.propTypes = {
    createPost: PropTypes.func.isRequired
  };
  
  export default connect(null, { createPost, updatePost })(TodoInput);