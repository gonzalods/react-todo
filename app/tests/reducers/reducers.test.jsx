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
        text: 'walk the dog'
      }
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0].text).toEqual(action.text);
    });
    it('shold toggle todo by id', () => {
        var todos = [
          {
            id: 'a',
            text: 'Una cosa',
            completed: false,
            createdAt: 12,
            completedAt: undefined
          },
          {
            id: 'b',
            text: 'Otra cosa',
            completed: true,
            createdAt: 125,
            completedAt: 245
          }
        ];
        var action = {
          type: 'TOGGLE_TODO',
          id: 'a'
        }
          var res = reducers.todosReducer(df(todos), df(action));

          expect(res[0].completed).toBe(true);
          expect(res[0].completedAt).toBeA('number');

          action = {
            type: 'TOGGLE_TODO',
            id: 'b'
          }

          res = reducers.todosReducer(df(todos), df(action));
          expect(res[1].completed).toBe(false);
          expect(res[1].completedAt).toBe(undefined);
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
});
