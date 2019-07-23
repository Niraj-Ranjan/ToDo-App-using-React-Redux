import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import { Provider } from 'react-redux';

import store from './store';


class App extends React.Component{

  render(){
    const a = state => ({
      newPost: state.posts.item
    });

    console.log(a);
    

    return (
      <Provider store = {store}>
      <div className="container">
        <div className="row">
          <div className = "col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
              To Do Input
            </h3>
            <TodoInput ></TodoInput>
            <TodoList></TodoList>
          </div>
        </div>
      </div>
    </Provider> 
    );

  }
}

export default App;
