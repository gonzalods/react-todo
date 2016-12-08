var $ = require('jquery');

module.exports = {
  filterTodos: function(todos, showCompleted, searchText) {
    var filterTodos = todos;

    // Filter by showCompleted
    filterTodos = filterTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filster by searchText
    filterTodos = filterTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText.toLowerCase()) > -1;
    });

    // Sort todos with non-completed first
    filterTodos.sort((a, b) => {
      if(!a.completed && b.completed){
        return -1;
      }else if (a.completed && !b.completed) {
        return 1;
      }else{
        return 0;
      }
    });
    return filterTodos;
  }
};
