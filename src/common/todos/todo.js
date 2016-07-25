import { Record } from '../transit';

const Todo = Record({
  status: 'todo', 
  createdAt: null,
  id: '',
  title: ''
}, 'todo');

export default Todo;
