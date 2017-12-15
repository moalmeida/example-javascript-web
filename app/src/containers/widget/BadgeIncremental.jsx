import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Badge from '../../components/layout/Badge';
import { incrementalCount } from '../../actions';

const mapStateToProps = (state) => {
  const { getCountInfo } = state;
  const { incCount } = getCountInfo;
  return { incCount };
};

class BadgeIncremental extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    setInterval(() => {
      dispatch(incrementalCount());
    }, 1000);
  }
  render() {
    const { incCount } = this.props;
    return (
      <div className="">
        <Badge name="INCREMENTAL" className="fa-spin fa-cog" count={incCount} />
      </div>
    );
  }
}

BadgeIncremental.propTypes = {
  incCount: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

// BadgeIncremental.defaultProps = {
//   // incCount: 0,
// };

export default connect(mapStateToProps)(BadgeIncremental);
