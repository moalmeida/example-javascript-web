import React from 'react';
import { Row } from 'react-bootstrap';

import Breadcrumb from '../components/Breadcrumb';

const Settings = () => {
  const breadcrumb = [
    {
      url: '#',
      name: 'SETTINGS',
    },
  ];
  return (
    <section className="container-fluid">
      <Row>
        <Breadcrumb items={breadcrumb} />
      </Row>
      <Row />
    </section>
  );
};

export default Settings;
