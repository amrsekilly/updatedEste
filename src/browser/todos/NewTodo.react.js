import './NewTodo.scss';
import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import newTodoMessages from '../../common/todos/newTodoMessages';
import { FormattedMessage } from 'react-intl';
import { addTodo } from '../../common/todos/actions';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

class NewTodo extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired,
    resetForm: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
  }


  onInputKeyDown(e) {
    if (e.key !== 'Enter') return;
    const { addTodo, fields: {title}, resetForm } = this.props;
    if (!title.value.trim()) return;
    addTodo(title.value);
    resetForm();
  }

  render() {
    const { fields: {title} } = this.props;

    return (
      <FormattedMessage {...newTodoMessages.placeholder}>
        {message =>
          <input
            {...title}
            autoFocus
            className="new-todo"
            maxLength={100}
            onKeyDown={this.onInputKeyDown}
            placeholder={message}
          />
        }
      </FormattedMessage>
    );
  }

}

NewTodo = reduxForm({
  form: 'newTodo',
  fields: ['title']
})(NewTodo);

export default connect(null, { addTodo })(NewTodo);
