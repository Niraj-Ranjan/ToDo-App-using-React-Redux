import React, { Component } from 'react';

import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';
import TodoItem from './TodoItem';

class TodoList extends Component {
    componentWillMount(){
       this.props.fetchPosts();
        
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
const mapStateToProps = state => ({
    posts: state.posts.items
  });
  

export default connect(mapStateToProps, {fetchPosts}) (TodoList);