import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
    onRowPress() {
        Actions.plantEdit({ plant: this.props.plant });
    }
    render() {
        const { name, image } = this.props.plant;
        const { cardSectionStyle, titleStyle, thumbnailStyle } = styles;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection style={cardSectionStyle}>
                        <Image
                            style={thumbnailStyle}
                            source={{ uri: image }}
                            />
                        <Text style={titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    cardSectionStyle: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    }
};

export default ListItem;
