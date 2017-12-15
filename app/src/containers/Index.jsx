import React from 'react';
import { Row } from 'react-bootstrap';

import Breadcrumb from '../components/Breadcrumb';
import BadgeIncremental from './widget/BadgeIncremental';
import BadgeTodo from './widget/BadgeTodo';

const Index = () => {
  const breadcrumb = [
    {
      url: '#',
      name: 'INDEX',
    },
  ];
  return (
    <section className="container-fluid">
      <Row>
        <Breadcrumb items={breadcrumb} />
      </Row>
      <Row>
        <BadgeTodo />
        <BadgeIncremental />
      </Row>
    </section>
  );
};

export { Index as default };
