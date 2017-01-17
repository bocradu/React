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
                    placeholder="Rose"
                    onChangeText={value => this.props.plantUpdate({ prop: 'name', value })}
                    value={this.props.name}
                    />
            </CardSection>
            <CardSection>
                <TextBox
                    label="Plant description"
                    placeholder="any of a genus of usually prickly shrubs with pinnate leaves and showy flowers"
                    onChangeText={value => this.props.plantUpdate({ prop: 'description', value })}
                    value={this.props.description}
                    />
            </CardSection>
            <CardSection>
                <TextBox
                    label="Species"
                    placeholder="Hulthemia"
                    onChangeText={value => this.props.plantUpdate({ prop: 'species', value })}
                    value={this.props.species}
                    />
            </CardSection>
            <CardSection>
                <TextBox
                    label="Family"
                    placeholder="Rosaceae"
                    onChangeText={value => this.props.plantUpdate({ prop: 'family', value })}
                    value={this.props.family}
                    />
            </CardSection>
            <CardSection>
                <TextBox
                    label="Color"
                    placeholder="pink"
                    onChangeText={value => this.props.plantUpdate({ prop: 'color', value })}
                    value={this.props.color}
                    />
            </CardSection>
            <CardSection>
                <TextBox
                    label="Native range"
                    placeholder="Asia"
                    onChangeText={value => this.props.plantUpdate({ prop: 'native_range', value })}
                    value={this.props.native_range}
                    />
            </CardSection>
            <CardSection>
                <TextBox
                    label="Habitat"
                    placeholder="Asia"
                    onChangeText={value => this.props.plantUpdate({ prop: 'native_range', value })}
                    value={this.props.native_range}
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
