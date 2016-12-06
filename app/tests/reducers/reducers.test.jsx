var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });
  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toBe(true);
    });
  });
  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'fe54',
          text: 'nueva tarea',
          completed: false,
          createdAt: 2548,
          completedAt: null
        }
      }
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0]).toEqual(action.todo);
    });
    it('shold update todo', () => {
        var todos = [
          {
            id: 'a',
            text: 'Una cosa',
            completed: false,
            createdAt: 12
          },
          {
            id: 'b',
            text: 'Otra cosa',
            completed: true,
            createdAt: 125,
            completedAt: 245
          }
        ];
        var updates = {
          completed: true,
          completedAt: 3452
        }
        var action = {
          type: 'UPDATE_TODO',
          id: todos[0].id,
          updates
        }
          var res = reducers.todosReducer(df(todos), df(action));

          expect(res[0].completed).toEqual(updates.completed);
          expect(res[0].completedAt).toEqual(updates.completedAt);
          expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existings todos', () => {
      var todos = [{
        id: '111',
        text: 'algo',
        completed: false,
        completedAt: undefined,
        createAt: 33025
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });

  describe('authReducer', () => {
    it('should store uid on LOGIN', () => {
      const action = {
        type: 'LOGIN',
        uid: '123qwe'
      };
      const res = reducers.authReducer(undefined, df(action));

      expect(res).toEqual({
        uid: action.uid
      });
    });

    it('should store uid on LOGIN', () => {
      const authData = {
        uid: '123qwe'
      };
      const action = {
        type: 'LOGOUT'
      };
      const res = reducers.authReducer(df(authData), df(action));

      expect(res).toEqual({});
    });
  });
});
