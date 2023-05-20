import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductEditCard from './components/ProductEditCard';

const RequirementEdit = () => (
  <Container>
    <Row>
      <Col md={16}>
        <h3 className="page-title">Requirements Add/edit</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to Add or Edit an requirement
        </h3>
      </Col>
    </Row>
    <Row>
      <ProductEditCard />
    </Row>
  </Container>
);

export default RequirementEdit;
