import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import { updateFilter } from '../../common/todos/actions';
import { connect } from 'react-redux';

class Filter extends Component {

  static propTypes = {
    updateFilter: PropTypes.func.isRequired
  };

  render() {
    const { updateFilter, activeFilter } = this.props;

    return (
      <div>
        <a
        onClick={ updateFilter.bind(this, "") }>
          All
        </a>
        {' '}
        <a
        onClick={ updateFilter.bind(this, "todo") }>
          Active
        </a>
        {' '}
        <a
        onClick={ updateFilter.bind(this, "complete") }>
          Completed
        </a>
        {' '}
        <a
        onClick={ updateFilter.bind(this, "delete") }>
          Removed
        </a>
      </div>
    );
  }

}

export default connect(state => ({
  activeFilter: state.activeFilter
}), { updateFilter })(Filter);
