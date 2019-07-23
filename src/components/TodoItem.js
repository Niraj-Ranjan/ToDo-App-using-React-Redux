import React, { Component } from 'react'

import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';
import {deletePost} from '../actions/postActions';

class TodoItem extends Component {
    deleteContact(e, index){
        e.preventDefault();
        console.log("calling delete dunction");
        console.log(index);
        
        
        this.props.deletePost(index);
      }
    render() {
        const {title,handleEdit,id} = this.props;
        return (


            <div class="list-group my-2">
   
                <div class="list-group-item list-group-item-action">
                <div className="pull-right">
                        <span className="mx-2 text-success" onClick={handleEdit}>
                            <i className="fa fas fa-edit"></i>
                        </span>
                        <span className="mx-2 text-danger" onClick={(e) => this.deleteContact(e, id)}>
                            <i className="fa fas fa-trash"></i>
                        </span>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                    
                    <h5 class="mb-1">{title}</h5>
                    </div>
                
                    
                </div>
            </div>
        //     <div className="list-group-item list-group-item-info text-capitalize d-flex justify-content-between my-2">
        //         <h6>{title}</h6>
        //         <div className="todo-icon">
        //             <span className="mx-2 text-success" onClick={handleEdit}>
        //                 <i className="fa fas fa-edit"></i>
        //             </span>
        //             <span className="mx-2 text-danger" onClick={handleDelete}>
        //                 <i className="fa fas fa-trash"></i>
        //             </span>
        //         </div>
        //     </div>
        )
    }
}

export default connect(null, {fetchPosts,deletePost}) (TodoItem);