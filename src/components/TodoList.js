import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';
import TodoItem from './TodoItem';

class TodoList extends Component {
    componentWillMount(){
       this.props.fetchPosts();
        
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
          this.props.posts.unshift(nextProps.newPost);
        }
      }
  
    
    render() {
        
        return(
            <ul className= "list-group my-5">
                                <h3 className="text-capitalize text-center">
                    ToDo List
                </h3>
                {
                    this.props.posts.map(
                        item => {
                            return ( <TodoItem 
                                    key={item.id} 
                                    title={item.title}
                                    body={item.body}
                                   ></TodoItem>)
                        }
                    )
                }
               
                <button type="button" className="btn btn-danger btn-block text-capitalize mt-5"
                >Clear</button>

            </ul>
        )
        


        
        
}
}
TodoList.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
  };
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
  });
  

export default connect(mapStateToProps, {fetchPosts}) (TodoList);