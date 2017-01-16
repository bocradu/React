import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene
                    key="login"
                    component={LoginForm}
                    title="Please Login"
                    initial
                    />
            </Scene>
            <Scene key="main">
                <Scene
                    component={EmployeeList}
                    key="employeeList"
                    onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                    title="Employees"
                    />
                <Scene
                    component={EmployeeCreate}
                    key="employeeCreate"
                    title="Create Employee"
                    />
                <Scene
                    component={EmployeeEdit}
                    key="employeeEdit"
                    title="Edit Employee"
                    />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
