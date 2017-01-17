import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { plantUpdate, plantSave, plantDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import PlantForm from './PlantForm';


class PlantEdit extends Component {
    state = { showModal: false };
    componentWillMount() {
        _.each(this.props.plant, (value, prop) => {
            this.props.plantUpdate({ prop, value });
        });
    }

    onSaveButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.plantSave({ name, phone, shift, uid: this.props.plant.uid });
    }

    onTextButtonPress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onFireButtonPress() {
        this.changeModalVisibility();
    }

    onAccept() {
        const { uid } = this.props.plant;
        this.props.plantDelete(uid);
        this.changeModalVisibility();
    }

    onDecline() {
        this.changeModalVisibility();
    }

    changeModalVisibility() {
        this.setState({ showModal: !this.state.showModal });
    }

    render() {
        return (
            <Card>
                <PlantForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onSaveButtonPress.bind(this)}>
                        Save changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextButtonPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onFireButtonPress.bind(this)}>
                        Fire {this.props.name}
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                    >
                    Are you sure you want to fire {this.props.name}?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.plantForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    plantUpdate,
    plantSave,
    plantDelete
})(PlantEdit);
