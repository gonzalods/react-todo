import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends React.Component{
  constructor(props){
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;
    if(todoText.length > 0){
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    }else{
      this.refs.todoText.focus();
    }
  }
  render() {
    return (
      <div className="container__footer">
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="todoText" placeholder="Add new todo"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default Redux.connect()(AddTodo);
