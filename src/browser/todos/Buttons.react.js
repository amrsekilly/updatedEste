import './Buttons.scss';
import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import buttonsMessages from '../../common/todos/buttonsMessages';
import { FormattedMessage } from 'react-intl';
import { addHundredTodos, clearAllTodos } from '../../common/todos/actions';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

class Buttons extends Component {

  static propTypes = {
    addHundredTodos: PropTypes.func.isRequired,
    clearAllTodos: PropTypes.func.isRequired,
    todos: PropTypes.object.isRequired
  };

  render() {
    const { addHundredTodos, clearAllTodos, todos } = this.props;

    return (
      <div className="buttons">
        <Button
          disabled={todos.size === 0}
          bsStyle="warning"
          onClick={clearAllTodos}
        ><FormattedMessage {...buttonsMessages.clearAll} /></Button>
        <Button
          onClick={addHundredTodos}
          bsStyle="success"
        ><FormattedMessage {...buttonsMessages.add100} /></Button>
      </div>
    );
  }

}

export default connect(state => ({
  todos: state.todos.map
}), { addHundredTodos, clearAllTodos })(Buttons);
