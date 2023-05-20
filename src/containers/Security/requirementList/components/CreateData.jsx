import React, { useMemo } from 'react';
import styled from 'styled-components';
import Badge from '@/shared/components/Badge';
import { colorFieldsBorder } from '@/utils/palette';

const Img1 = `${process.env.PUBLIC_URL}/img/for_store/vase.png`;
const Img2 = `${process.env.PUBLIC_URL}/img/for_store/vase_2.png`;
const Img3 = `${process.env.PUBLIC_URL}/img/for_store/vase_3.png`;
const Img4 = `${process.env.PUBLIC_URL}/img/for_store/fur.png`;
const Img5 = `${process.env.PUBLIC_URL}/img/for_store/pillow.png`;
const Img6 = `${process.env.PUBLIC_URL}/img/for_store/pillow_2.png`;
const Img7 = `${process.env.PUBLIC_URL}/img/for_store/pillow_dog.png`;

const PhotoFormatter = value => (
  <ProductImageWrap>
    <img src={value} alt="" />
  </ProductImageWrap>
);

const CreateDataRequirementListTable = () => {
  const columns = useMemo(() => [
    {
      Header: 'Section',
      accessor: 'Section',
      width: 80,
    },

    {
      Header: 'Requirement',
      accessor: 'Requirement',
      disableSortBy: true,
      width: 180,
    },
    {
      Header: 'Security F.W',
      accessor: 'Security F.W',
      disableSortBy: true,
    },
    {
      Header: 'Notes',
      accessor: 'Notes',
      disableSortBy: true,
    },
    {
      Header: 'Status',
      accessor: 'status',
      width: 110,
      disableGlobalFilter: true,
    },
  ], []);

  const data = [];
  const rows = () => {
    for (let i = 1; i < 36; i += 1) {
      data.push({
        id: Math.min(99999, Math.round((Math.random() * 99999) + 1000)),
        name: ['Glass Vase', 'Pillow'][Math.floor((Math.random() * 2))],
        quantity: Math.min(400, Math.round(Math.random() * 400)),
        article: `art${Math.min(99999, Math.round((Math.random() * 99999) + 1))}`,
        status: [
          (<Badge bg="success">E x i s t</Badge>),
          (<Badge bg="secondary">NotExist</Badge>),
        ][Math.floor((Math.random() * 2))],
      });
    }
  };

  rows();
  const requirementListTableData = { tableHeaderData: columns, tableRowsData: data };
  return requirementListTableData;
};

export default CreateDataRequirementListTable;

// region STYLES

const ProductImageWrap = styled.div`
  width: 40px;
  height: 35px;
  text-align: center;
  padding: 2px;
  border: 1px solid ${colorFieldsBorder};

  img {
    max-height: 100%;
    width: auto;
  }
`;

// endregion
