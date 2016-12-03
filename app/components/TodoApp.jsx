var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Sacar al perro'
        }, {
          id: 2,
          text: 'Cortar el cesped'
        },{
          id: 3,
          text: 'Ir a la compra'
        }, {
          id: 4,
          text: 'Poner la lavadora'
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    alert('new todo:' + text);
  },
  handleSerch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.loLowerCase()
    });

  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSerch}/>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
