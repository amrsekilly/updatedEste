import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import { showAll, showActive, showCompleted, showRemoved } from '../../common/todos/actions';
import { connect } from 'react-redux';

class Filter extends Component {

  static propTypes = {
    showAll: PropTypes.func.isRequired,
    showActive: PropTypes.func.isRequired,
    showCompleted: PropTypes.func.isRequired,
    showRemoved: PropTypes.func.isRequired
  };

  render() {
    const { showAll, showActive, showCompleted, showRemoved, todos } = this.props;

    return (
      <div>
        <a
        onClick={showAll}>
          All
        </a>
        {' '}
        <a
        onClick={showActive}>
          Active
        </a>
        {' '}
        <a
        onClick={showCompleted}>
          Completed
        </a>
        {' '}
        <a
        onClick={showRemoved}>
          Removed
        </a>
      </div>
    );
  }

}

export default connect(state => ({
  todos: state.todos.map
}), { showAll, showActive, showCompleted, showRemoved })(Filter);
