import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        const { name, description, species, family, color, nativeRange, habitat, imageUri } = this.props;
        this.props.plantSave({ name, description, species, family, color, nativeRange, habitat, imageUri, uid: this.props.plant.uid });
    }

    onDeleteButtonPress() {
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
                    <Button onPress={this.onDeleteButtonPress.bind(this)}>
                        Delete plant {this.props.name}
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                    >
                    Are you sure you want to delete {this.props.name}?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, description, species, family, color, nativeRange, habitat, imageUri } = state.plantForm;
    return { name, description, species, family, color, nativeRange, habitat, imageUri };
};

export default connect(mapStateToProps, {
    plantUpdate,
    plantSave,
    plantDelete
})(PlantEdit);
