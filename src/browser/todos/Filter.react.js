import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import { updateFilter } from '../../common/todos/actions';
import { connect } from 'react-redux';

class Filter extends Component {

  static propTypes = {
    updateFilter: PropTypes.func.isRequired
  };

  render() {
    const { updateFilter } = this.props;

    return (
      <div>
        <a
        onClick={ updateFilter.bind(this, 1) }>
          All
        </a>
        {' '}
        <a
        onClick={ updateFilter.bind(this, 2) }>
          Active
        </a>
        {' '}
        <a
        onClick={ updateFilter.bind(this, 3) }>
          Completed
        </a>
        {' '}
        <a
        onClick={ updateFilter.bind(this, 4) }>
          Removed
        </a>
      </div>
    );
  }

}

export default connect(state => ({
  activeFilter: state.activeFilter
}), { updateFilter })(Filter);
