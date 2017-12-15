import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Badge from '../../components/layout/Badge';
import { fetchTodo } from '../../actions';

class BadgeTodo extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchTodo());
  }
  render() {
    const { todosCount } = this.props;
    return (
      <div className="">
        <Badge name="TODO" url="/todos" className="fa-tasks" count={todosCount} />
      </div>
    );
  }
}

BadgeTodo.propTypes = {
  todosCount: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

// BadgeTodo.defaultProps = {
//   todosCount: 0,
// };

const mapStateToProps = (state) => {
  const { getTodoInfo } = state;
  const { todosCount } = getTodoInfo;
  return { todosCount };
};

export default connect(mapStateToProps)(BadgeTodo);
