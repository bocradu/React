import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PlantList from './components/PlantList';
import PlantCreate from './components/PlantCreate';
import PlantEdit from './components/PlantEdit';

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
                    component={PlantList}
                    key="plantList"
                    onRight={() => Actions.plantCreate()}
                    rightTitle="Add"
                    title="My plants"
                    />
                <Scene
                    component={PlantCreate}
                    key="plantCreate"
                    title="Create Plant"
                    />
                <Scene
                    component={PlantEdit}
                    key="plantEdit"
                    title="Edit Plant"
                    />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
