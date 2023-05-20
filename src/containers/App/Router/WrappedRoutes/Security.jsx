import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RequirementEdit from '../../../Security/requirementEdit/index';
import RequirementsList from '../../../Security/requirementList/index';

export default () => (
  <Switch>
    <Route path="/security/requirement_edit" component={RequirementEdit} />
    <Route path="/security/requirements_list" component={RequirementsList} />
  </Switch>
);
