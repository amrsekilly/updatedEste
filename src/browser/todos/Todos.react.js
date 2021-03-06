import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import Todo from './Todo.react';
import todosMessages from '../../common/todos/todosMessages';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodoCompleted } from '../../common/todos/actions';

// Container component.
export class Todos extends Component {

  static propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    todos: PropTypes.object.isRequired
  };

  render() {
    const { deleteTodo, todos, toggleTodoCompleted } = this.props;

    if (!todos.size) {
      return <p><FormattedMessage {...todosMessages.empty} /></p>;
    }

    var selectedFilter = todos.get('selectedFilter')? todos.get('selectedFilter') : "";

    const list = todos.toList().sortBy(item => item.createdAt).reverse().filter(item => selectedFilter === ""? item : item.status === selectedFilter);

    return (
      <ol className="todos">
        {
          list.map(todo =>
          {
            if (todo.status !== 'delete' || selectedFilter === 'delete'  || selectedFilter === "")
            {
              return (
                <Todo
                  deleteTodo={deleteTodo}
                  todo={todo}
                  toggleTodoCompleted={toggleTodoCompleted}
                  key={todo.id}
                  selectedFilter={selectedFilter}
                />
              );
            }
          }
        )
      }
      </ol>
    );
  }

}

export default connect(state => ({
  todos: state.todos.map
}), { deleteTodo, toggleTodoCompleted })(Todos);
