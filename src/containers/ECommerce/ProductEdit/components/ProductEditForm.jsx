import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, Form } from 'react-final-form';
import CurrencyUsdIcon from 'mdi-react/CurrencyUsdIcon';
import TagIcon from 'mdi-react/TagIcon';
import renderDropZoneMultipleField from '@/shared/components/form/dropzones/DropZoneMultiple';
import renderSelectField from '@/shared/components/form/Select';
import {
  CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupIcon,
  FormGroupLabel,
  FormHalfContainer,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import { marginRight } from '@/utils/directions';

const ProductEditForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, form }) => (
      <FormContainer className="product-edit" onSubmit={handleSubmit}>

        <FormGroup>
          <FormGroupLabel>Requirement</FormGroupLabel>
          <FormGroupField>
            <Field
              name="Requirement"
              component="input"
              type="text"
            />
          </FormGroupField>
        </FormGroup>
        <FormGroupIdCategory>
          <FormGroupId>
            <FormGroupLabel>Code of Section</FormGroupLabel>
            <FormGroupField>
              <Field
                name="Section"
                component="input"
                type="text"
              />
            </FormGroupField>

          </FormGroupId>
          <FormGroup>
            <FormGroupLabel>Security Framework</FormGroupLabel>
            <FormGroupField>
              <Field
                name="sfw"
                component={renderSelectField}
                options={[
                  { value: 'ISO27001', label: 'ISO27001' },
                  { value: 'TISAX', label: 'TISAX' },
                ]}
              />
            </FormGroupField>

          </FormGroup>
          <FormGroup>
            <FormGroupLabel>Status</FormGroupLabel>
            <FormGroupField>
              <Field
                name="Status"
                component={renderSelectField}
                options={[
                  { value: 'Defined', label: 'Defined' },
                  { value: 'Nonexistent', label: 'Nonexistent' },
                ]}
              />
            </FormGroupField>

          </FormGroup>
          
        </FormGroupIdCategory>
        <FormGroup>
          <FormGroupLabel>
            Short Note <span dir="ltr">(300 characters max)</span>
          </FormGroupLabel>
          <FormGroupField>
            <Field
              name="short_description"
              component="input"
              type="text"
            />
          </FormGroupField>
        </FormGroup>


        <FormGroup>
          <FormButtonToolbar>
            <Button variant="primary" type="submit">Save</Button>
            <Button variant="secondary" type="button" onClick={form.reset}>Cancel</Button>
          </FormButtonToolbar>
        </FormGroup>
      </FormContainer>


    )}
  </Form>
);

ProductEditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ProductEditForm;

// region STYLES

const FormGroupPrice = styled(FormGroup)`
  ${marginRight}: 20px;
  
  @media screen and (max-width: 767px) {
    ${marginRight}: 0;
  }
`;

const FormGroupPriceDiscount = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;

  & > div {
    margin-bottom: 0;
  }

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

const FormGroupId = styled(FormGroup)`
  min-width: 100px;
  width: 40%;
  ${marginRight}: 20px;

  @media screen and (max-width: 767px) {
    ${marginRight}: 0;
    width: 100%;
  }
`;

const FormGroupIdCategory = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

// endregion
