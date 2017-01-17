import React, { Component } from 'react';
import { connect } from 'react-redux';
import { plantUpdate, plantCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import PlantForm from './PlantForm';

class PlantCreate extends Component {
    onButtonPress() {
        const { name, description, species, family, color, nativeRange, habitat, imageUri } = this.props;
        this.props.plantCreate({ name, description, species, family, color, nativeRange, habitat, imageUri });
    }

    render() {
        return (
            <Card>
                <PlantForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>

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
    plantCreate
})(PlantCreate);
