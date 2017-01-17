import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { plantUpdate } from '../actions';
import { CardSection, TextBox, } from './common';

class EmployeeForm extends Component {
    render() {
        return (<View>
            <CardSection>
                <TextBox
                    label="Name"
                    placeholder="Ion Pop"
                    onChangeText={value => this.props.plantUpdate({ prop: 'name', value })}
                    value={this.props.name}
                    />
            </CardSection>
            <CardSection>
                <TextBox
                    label="Phone"
                    placeholder="0723456789"
                    onChangeText={value => this.props.plantUpdate({ prop: 'phone', value })}
                    value={this.props.phone}
                    />
            </CardSection>
            <CardSection style={{ flexDirection: 'column' }}>
                <Text style={styles.pickerTextStyle}>Shift</Text>
                <Picker
                    style={{ flex: 1 }}
                    onValueChange={value => this.props.plantUpdate({ prop: 'shift', value })}
                    selectedValue={this.props.shift}
                    >
                    <Picker.Item label="Monday" value="Monday" />
                    <Picker.Item label="Tuesday" value="Tuesday" />
                    <Picker.Item label="Wednesday" value="Wednesday" />
                    <Picker.Item label="Thursday" value="Thursday" />
                    <Picker.Item label="Friday" value="Friday" />
                    <Picker.Item label="Saturday" value="Saturday" />
                    <Picker.Item label="Sunday" value="Sunday" />
                </Picker>
            </CardSection>
        </View>);
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.plantForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { plantUpdate })(EmployeeForm);
