import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { plantUpdate, selectImage } from '../actions';
import { CardSection, TextBox, Button } from './common';

class PlantForm extends Component {
    onSelectImageButtonPress() {
        this.props.selectImage();
    }

    render() {
        return (<ScrollView>
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
                    onChangeText={value => this.props.plantUpdate({ prop: 'nativeRange', value })}
                    value={this.props.nativeRange}
                    />
            </CardSection>
            <CardSection>
                <TextBox
                    label="Habitat"
                    placeholder="Cool temperature and high winds"
                    onChangeText={value => this.props.plantUpdate({ prop: 'habitat', value })}
                    value={this.props.habitat}
                    />
            </CardSection>
            <CardSection style={{ flexDirection: 'row' }}>
                <Text style={styles.pickerTextStyle}>Image</Text>
                <Button onPress={this.onSelectImageButtonPress.bind(this)}>
                    Select image
                </Button>
            </CardSection>
            <CardSection
                style={{
                    width: 150,
                    height: 150
                }}>
                <Image source={{ uri: this.props.imageUri }} style={styles.imageStyle} />
            </CardSection>
        </ScrollView>);
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    },
    imageStyle: {
        width: 150,
        height: 150,
        alignSelf: 'center'
    }
};

const mapStateToProps = (state) => {
    const { name, description, species, family, color, nativeRange, habitat, imageUri } = state.plantForm;
    return { name, description, species, family, color, nativeRange, habitat, imageUri };
};

export default connect(mapStateToProps, {
    plantUpdate,
    selectImage
})(PlantForm);
