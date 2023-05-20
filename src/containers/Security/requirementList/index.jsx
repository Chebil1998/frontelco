import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import RequirementsListTable from './components/RequirementsListTable';
import CreateTableData from './components/CreateData';
import ProductEdit from '../requirementEdit';

const RequirementList = () => {
  const requirementListTableData = CreateTableData();

  return (
    <Container>
      <ProductEdit />
      <Row>
        <Col md={12}>
          <h3 className="page-title">Requirements List</h3>
          
        </Col>
      </Row>
      <Row>
        <RequirementsListTable requirementListTableData={requirementListTableData} />
      </Row>
    </Container>
  );
};

export default RequirementList;
