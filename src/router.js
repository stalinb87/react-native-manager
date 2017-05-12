import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/login-form';
import EmployeeList from './components/employee-list';
import EmployeeCreate from './components/employee-create';

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="auth">
      <Scene key="login" component={LoginForm} title="Please Login" />
    </Scene>
    <Scene key="main">
      <Scene
        key="employeeList"
        component={EmployeeList}
        title="Employees"
        rightTitle="Add"
        onRight={() => Actions.employeeCreate()}
      />
    <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
    </Scene>
  </Router>
);

export default RouterComponent;
