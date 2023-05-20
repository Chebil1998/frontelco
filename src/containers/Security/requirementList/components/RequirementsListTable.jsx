import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactTableBase from '@/shared/components/table/ReactTableBase';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { ButtonToolbar, Button } from '@/shared/components/Button';
import { right } from '@/utils/directions';

const RequirementsListTable = ({ requirementListTableData }) => {
  const tableConfig = {
    isEditable: false,
    isSortable: true,
    isResizable: false,
    withPagination: true,
    withSearchEngine: true,
    manualPageSize: [10, 20, 30, 40],
    placeholder: 'Search...',
  };

  return (
    <Col md={13} lg={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>Requirements List</CardTitle>
            <RequirementListToolbar>
              <RequirementListAddButton variant="primary" as={Link} to="/e-commerce/product_edit">
                Add new Requirement
              </RequirementListAddButton>
            </RequirementListToolbar>
          </CardTitleWrap>
          <ReactTableBase
            columns={requirementListTableData.tableHeaderData}
            data={requirementListTableData.tableRowsData}
            tableConfig={tableConfig}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

RequirementsListTable.propTypes = {
  requirementListTableData: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default RequirementsListTable;

// region STYLES

const RequirementListToolbar = styled(ButtonToolbar)`
  position: absolute;
  top: 0;
  ${right}: 0;
  margin: 0;

  @media screen and (max-width: 992px) {
    position: relative;
    margin-top: 10px;
  }
`;

const RequirementListAddButton = styled(Button)`
  padding: 4px 25px;
  text-transform: none;
`;

// endregion
