import React, { Component } from 'react';
import { connect } from 'react-redux';
import { plantUpdate, plantCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import PlantForm from './PlantForm';

class PlantCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
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
    const { name, phone, shift } = state.plantForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    plantUpdate,
    plantCreate
})(PlantCreate);
