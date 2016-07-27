import * as actions from './actions';
import Todo from './todo';
import { Map } from 'immutable';
import { Record } from '../transit';

const InitialState = Record({
  map: Map(),
}, 'filter');

export default function todosReducer(state = new InitialState, action) {
  switch (action.type) {

    case actions.UPDATE_FILTER: {
      return state.updateIn(['map', 'selectedFilter'], value => action.index);
    }
  }

  return state;
}
