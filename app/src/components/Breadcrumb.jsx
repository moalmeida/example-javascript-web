import React from 'react';
import { Breadcrumb as B } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Breadcrumb = (props) => {
  let { items } = props;
  if (items && items.length > 0) {
    items = items.map(item => (
      <B.Item key={item.name} href={item.url}>
        {item.name}
      </B.Item>
    ));
  }
  return (
    <B>
      {items}
    </B>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

export { Breadcrumb as default };
