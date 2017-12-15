import React from 'react';
import { Row } from 'react-bootstrap';

import Breadcrumb from '../components/Breadcrumb';

const Todos = () => {
  const breadcrumb = [
    {
      url: '#',
      name: 'TODOS',
    },
  ];
  return (
    <section className="container-fluid">
      <Row>
        <Breadcrumb items={breadcrumb} />
      </Row>
    </section>
  );
};

export default Todos;
