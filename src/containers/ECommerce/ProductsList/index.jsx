import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ProductsListTable from './components/ProductsListTable';
import CreateTableData from './components/CreateData';
import ProductEdit from '../ProductEdit';

const ProductsList = () => {
  const productListTableData = CreateTableData();

  return (
    <Container>
      <ProductEdit />
      <Row>
        <Col md={12}>
          <h3 className="page-title">Requirements List</h3>
          
        </Col>
      </Row>
      <Row>
        <ProductsListTable productListTableData={productListTableData} />
      </Row>
    </Container>
  );
};

export default ProductsList;
