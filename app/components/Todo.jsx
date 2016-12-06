var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

var lenguage = navigator.language || navigator.userLanguage || 'en';
moment.locale(lenguage);

export var Todo = React.createClass({
  render: function(){
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Creado ';
      var timestamp = createdAt;

      if(completed){
        message = 'Completado ';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('D MMM [de] YYYY @ h:mm a');
    };
    return (
      <div className={todoClassName} onClick={() => {
          dispatch(actions.startToggleTodo(id, !completed));
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

export default connect()(Todo);
