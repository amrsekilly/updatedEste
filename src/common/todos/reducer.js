import * as actions from './actions';
import Todo from './todo';
import { Map } from 'immutable';
import { Record } from '../transit';

const InitialState = Record({
  map: Map(),
}, 'todos');

export default function todosReducer(state = new InitialState, action) {
  switch (action.type) {

    case actions.ADD_HUNDRED_TODOS: {
      const todos = action.payload.reduce((todos, json) =>
        todos.set(json.id, new Todo(json))
      , Map());
      return state.update('map', map => map.merge(todos));
    }

    case actions.ADD_TODO: {
      const todo = new Todo(action.payload);
      return state.update('map', map => map.set(todo.id, todo));
    }

    case actions.CLEAR_ALL_COMPLETED_TODOS: {
      return state.update('map', map => map.filterNot(todo => todo.completed));
    }

    case actions.CLEAR_ALL_TODOS: {
      return state.update('map', map => map.clear());
    }

    case actions.DELETE_TODO: {
      const { todo } = action.payload;
      return state.updateIn(['map', todo.id, 'status'], value => 'delete');
    }

    case actions.TOGGLE_TODO_COMPLETED: {
      const { todo } = action.payload;
      return state.updateIn(['map', todo.id, 'status'], value => {
        switch (value) {
          case 'todo':
            return 'complete'
            break;
          case 'complete':
            return 'todo'
            break;
          default:
            return 'todo'
        }
      });
    }

  }

  return state;
}
