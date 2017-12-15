import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Badge = (props) => {
  const {
    className,
    count,
    name,
    url,
    delay,
  } = props;
  return (
    <div className="col-lg-3 col-md-6">
      <div className="panel panel-custom">
        <div className="panel-heading">
          <div className="row">
            <div className="col-xs-3">
              <i className={cx('fa fa-5x', className)} />
            </div>
            <div className="col-xs-9 text-right">
              <div className="huge badge">{count}</div>
              <div className="title">{name}</div>
            </div>
          </div>
        </div>
        <a href={url}>
          <div className="panel-footer">
            <span
              className="pull-left"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              see details
            </span>
            <span className="pull-right">
              <i className="fa fa-caret-square-o-right" aria-hidden="true" />
            </span>
            <div className="clearfix">&nbsp;</div>
          </div>
        </a>
      </div>
    </div>
  );
};

Badge.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  count: PropTypes.number,
  className: PropTypes.string,
  delay: PropTypes.string,
};

Badge.defaultProps = {
  name: '',
  url: '#',
  count: 0,
  className: '',
  delay: '200',
};

export { Badge as default };
